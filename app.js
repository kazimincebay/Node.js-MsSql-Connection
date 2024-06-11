const sql = require("mssql")

/*
Require Packages
npm i --save mssql
maybe npm i --save msnodesqlv8


*/


// const conn = new sql.ConnectionPool({
//     database : "test",
//     server : "localhost",
//     driver : "msnodesqlv8",
//     user: "sa",
//     password:"deneme",
//     options:{
//         trustServerCertificate : true,
//         trustedConnection:true
//     } 
// })

// conn.connect().then((result)=>{
    // if(result.connecting){
    //     console.log("connecting")
    // }
    // if(result.connected){
    //     console.log("connected")
    // }
   
// })

const config = {
    database : "test",
    server : "localhost",
    driver : "msnodesqlv8",
    user: "sa",
    password:"deneme",
    options:{
        trustServerCertificate : true,
        trustedConnection:true
    } 
}

sql.connect(config,function(err){
        if(err)console.log(err);
        var request = new sql.Request();
        request.query("select * from Student",function(err,records){
            if(err)console.log(err);
            else console.log(records);
        })
    })




