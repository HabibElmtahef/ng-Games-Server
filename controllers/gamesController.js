
const db = require('../database');

const gamesController = {
    listGames: async (req, res) => {
        const games = await db.query("SELECT * FROM games", (err, result) => {
            if(err) return res.json(err);
            if(result) return res.json(result)
        })
    },
    getOne: async (req, res) => {
        const {id} = req.params;
        //const game = await ("SELECT * FROM games WHERE id = ?",[id]);
        db.query("SELECT * FROM games WHERE id = ?",[id],(err, result) => {
            if(err) res.json({msg: "This Game does'nt Exist"})
            else res.json(result);
        })
        //if(!game) return res.json({msg: "This Game does'nt Exist"});
        //if(game) res.json(game)
    },
    addGame: async (req, res) => {

       const{title, description, image} = req.body;

        db.query("INSERT INTO games set ?",[req.body],
       (err, result) => {
        if (err) {
        res.send(err)
        } 
        else {
        res.send(result);
        }
       }
             );
    },
    updateGame: async (req, res) => {
        const {id} = req.params;
        const oldGame = req.body;
        db.query("UPDATE games set ? WHERE id = ?",[req.body, id]);
        res.json({msg: "the Game was Updated"})
    },
    deleteGame: async (req, res) => {
        const {id} = req.params;

        db.query("DELETE FROM games WHERE id = ?",[id], (err, result) =>{
            if(err) res.send("this Game Introuvable");
            else
            res.json({msg: "Game Deleted"})
        })
    }
}

module.exports = gamesController;