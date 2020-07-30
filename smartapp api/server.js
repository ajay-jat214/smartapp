const express=require('express');
const bodyParser=require('body-parser');
const bcrypt=require('bcrypt-nodejs');
const cors=require('cors');
const knex=require('knex');






const db=knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'ajstyles89',
    database : 'smart_brain'
  }
});


const app=express();




app.use(bodyParser.json());

app.use(cors());






app.get('/',(req,res)=>{
	res.send(database.users);
})

app.post('/signin',(req,res)=>{


	    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string

        });

        req.on('end', () => {
    	let d = JSON.parse(body)
        

        db.select('email','hash')
        .from('login')
        .where('email','=',d.email)
        .then(data => {
        	
        	const isValid=bcrypt.compareSync(d.password,data[0].hash);
        	
        	if(isValid)
        	{
        		return db.select('*').from('users')
        		.where('email','=',data[0].email)
        		.then(user=>{
        			
        			res.json('success');
        		})
        		.catch(err=>{res.status(400).json("unable to get user")})
        	}
        	else{
        		res.status(400).json("wrong credentialsss");
        	}
        })
        .catch(err=>{res.status(400).json("wrong credentials")});

    });
    }
})

app.post('/register', function(req,res){





    	if (req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string

        })
        ;

        req.on('end', () => {


        let d=JSON.parse(body);
          
        const hash = bcrypt.hashSync(d.password);  


        db.transaction(trx=>{
        trx.insert({
        	email:d.email,
        	hash:hash
        })
        .into('login')
        .returning('email')
        .then(loginEmail=>{
        	return trx('users')
        	.returning('*')
        	.insert({
        		email:loginEmail[0],
        		name:d.name,
        		joined:new Date()
        	})
        	.then(user=>{
        		res.json(user[0]);
        	})
        	.then(trx.commit)
        	.catch(trx.rollback)
        })
        })



    });
    }



})

app.get('/profile/:id',(req,res)=>{
	const{id}=req.params;


    db('users').from('users')
    .where({id})
    .then(user=>{
    	console.log(user[0]);
    	if(user.length){
    	    	res.json(user[0]);
    	    }
    	    else{
    	    	res.status(400).json("not found");
    	    }
    })
    .catch(err=>res.status(400).json("error occured"));

	
})

app.post('/image',(req,res)=>{
	const{id}=req.body;
	let found=false;
	database.users.forEach(user=>{
		if(id===user.id){
			found=true;
			user.entries++;
			return res.json(user.entries);
		}

	})
	    if(!found)
		{
			return res.status(400).json("not found");
		}
})





app.listen(3001,()=>{
	console.log("app is running on port 3001")

})