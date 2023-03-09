const db = require('../config');

const {hash, compare, hashSync } = require('bcrypt');

const {createToken} = require('../middleware/AuthenticatedUser');

class User {
    login(req, res) {
        const {email, password} = req.body;
        const strQry = 
        `
        SELECT name, surname, gender, cellnumber, email, password, imgURL, shipping_address, regDate,
        FROM Users
        WHERE emailAdd = '${email}';
        `;
        db.query(strQry, async (err, data)=>{
            if(err) throw err;
            if((!data.length) || (data == null)) {
                res.status(401).json({err: 
                    "You have provided an incorrect email address"});
            }else {
                await compare(password, 
                    data[0].password, 
                    (cErr, cResult)=> {
                        if(cErr) throw cErr;

                        const jwToken = 
                        createToken(
                            {
                                email, password  
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
        SELECT name, surname, gender, cellnumber, email, password, imgURL, shipping_address, regDate,
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
        SELECT name, surname, gender, cellnumber, email, password, imgURL, shipping_address, regDate,
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
        detail.password = await 
        hash(detail.password, 15);

        let user = {
            email: detail.email,
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
                res.cookie("RegisteredUser", jwToken, {
                    maxAge: 3600000,
                    httpOnly: true
                });
                res.status(200).json({msg: "The user's record was saved"})
            }
        })    
    }
 
    updateUser(req, res) {
        let data = req.body;
        if(data.password !== null || 
            data.password !== undefined)
            data.password = hashSync(data.password, 15);
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

class Service {
    fetchServices(req, res) {
        const strQry = `SELECT serviceId, name, description, 
        price, imgURL
        FROM services ;`;
        db.query(strQry, (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    fetchService(req, res) {
        const strQry = `SELECT serviceId, name, description, 
        price, imgURL
        FROM services
        WHERE id = ?;`;
        db.query(strQry, [req.params.id], (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    addService(req, res) {
        const strQry = 
        `
        INSERT INTO Service
        SET ?;
        `;
        db.query(strQry,[req.body],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to insert a new record"});
                }else {
                    res.status(200).json({msg: "Service saved"});
                }
            }
        );
    }
    updateService(req, res) {
        const strQry = 
        `
        UPDATE Service
        SET ?
        WHERE id = ?
        `;
        db.query(strQry,[req.body, req.params.id],
            (err)=> {
                if(err){
                    res.status(400).json({err: "Unable to update a record"});
                }else {
                    res.status(200).json({msg: "Service updated"});
                }
            }
        );    
    }
    deleteService(req, res) {
        const strQry = 
        `
        DELETE FROM Services
        WHERE id = ?;
        `;
        db.query(strQry,[req.params.id], (err)=> {
            if(err) res.status(400).json({err: "The record was not found"});
            res.status(200).json({msg: "The service was deleted"});
        })
    }

}

class Product {
    fetchProducts(req, res) {
        const strQry = `SELECT prodId, name, description, prodQuantity, price, imgURL
        FROM products;`;
        db.query(strQry, (err, results)=> {
            if(err) throw err;
            res.status(200).json({results: results})
        });
    }
    fetchProduct(req, res) {
        const strQry = `SELECT prodId, name, description, prodQuantity, price, imgURL
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
    Service,
    Product
}