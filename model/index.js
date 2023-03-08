const db = require('../config');

const {hash, compare, hashSync } = require('bcrypt');

const {createToken} = require('../middleware/AuthenticatedUser');

class User {
    login(req, res) {
        const {emailAdd, userPass} = req.body;
        const strQry = 
        `
        SELECT name, surname, gender, emailAdd, cellnumber, password,
        FROM Users
        WHERE emailAdd = '${emailAdd}';
        `;
        db.query(strQry, async (err, data)=>{
            if(err) throw err;
            if((!data.length) || (data == null)) {
                res.status(401).json({err: 
                    "You have provided an incorrect email address"});
            }else {
                await compare(userPass, 
                    data[0].userPass, 
                    (cErr, cResult)=> {
                        if(cErr) throw cErr;

                        const jwToken = 
                        createToken(
                            {
                                emailAdd, userPass  
                            }
                        );

                        res.cookie('LegitUser',
                        jwToken, {
                            maxAge: 3600000,
                            httpOnly: true
                        })
                        if(cResult) {
                            res.status(200).json({
                                msg: 'Logged in',
                                jwToken,
                                result: data[0]
                            })
                        }else {
                            res.status(401).json({
                                err: 'You have entered an invalid password or you are not registered'
                            })
                        }
                    })
            }
        })     
    }

    fetchUsers(req, res) {
        const strQry = 
        `
        SELECT userID, name, surname, gender, cellnumber, emailAdd, userImg joinDate, cart
        FROM Users;
        `;
        db.query(strQry, (err, data)=>{
            if(err) throw err;
            else res.status(200).json( 
                {results: data} );
        })
    }

    fetchUser(req, res) {
        const strQry = 
        `
        SELECT userID, name, surname, gender, cellnumber, emailAdd, userImg joinDate, cart
        FROM Users
        WHERE userID = ?;
        `;

        db.query(strQry,[req.params.id], 
            (err, data)=>{
            if(err) throw err;
            else res.status(200).json( 
                {results: data} );
        })
    }

    async createUser(req, res) {

        let detail = req.body;
        detail.userPass = await 
        hash(detail.userPass, 15);

        let user = {
            emailAdd: detail.emailAdd,
            password: detail.password
        }
        const strQry =
        `INSERT INTO Users
        SET ?;`;
        db.query(strQry, [detail], (err)=> {
            if(err) {
                res.status(401).json({err});
            }else {
                const jwToken = createToken(user);
                res.cookie("LegitUser", jwToken, {
                    maxAge: 3600000,
                    httpOnly: true
                });
                res.status(200).json({msg: "The user's record was saved"})
            }
        })    
    }

    updateUser(req, res) {
        let data = req.body;
        if(data.userPass !== null || 
            data.userPass !== undefined)
            data.userPass = hashSync(data.userPass, 15);
        const strQry = 
        `
        UPDATE Users
        SET ?
        WHERE userID = ?;
        `;
        db.query(strQry,[data, req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                "A row was affected"} );
        })    
    }

    deleteUser(req, res) {
        const strQry = 
        `
        DELETE FROM Users
        WHERE userID = ?;
        `;
        db.query(strQry,[req.params.id], 
            (err)=>{
            if(err) throw err;
            res.status(200).json( {msg: 
                "The record was removed from the database"} );
        })    
    }
}

class Product {
    fetchProducts(req, res) {
        const strQry = `SELECT id, prodName, prodDescription, 
        levels, prodPrice, prodQuantity, imgURL
        FROM products;`;
        db.query(strQry, (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    fetchProduct(req, res) {
        const strQry = `SELECT id, product, description, 
        levels, price, quantity, imgURL
        FROM products
        WHERE id = ?;`;
        db.query(strQry, [req.params.id], (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });

    }
    addProduct(req, res) {
        const strQry = 
        `
        INSERT INTO Products
        SET ?;
        `;
        db.query(strQry,[req.body],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to insert a new record"});
                }else {
                    res.status(200).json({msg: "Product saved"});
                }
            }
        );
    }
    updateProduct(req, res) {
        const strQry = 
        `
        UPDATE Products
        SET ?
        WHERE id = ?
        `;
        db.query(strQry,[req.body, req.params.id],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to update a record"});
                }else {
                    res.status(200).json({msg: "Product updated"});
                }
            }
        );    
    }
    deleteProduct(req, res) {
        const strQry = 
        `
        DELETE FROM Products
        WHERE id = ?;
        `;
        db.query(strQry,[req.params.id], (err)=> {
            if(err) res.status(400).json({err: "The record was not found"});
            res.status(200).json({msg: "The product was deleted"});
        })
    }

}

module.exports = {
    User, 
    Product
}