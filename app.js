const http=require('http');
const fs=require('fs');

const app=http.createServer((req,res)=>
{
    
    
    if(req.url==='/')
    {
        var d;
    fs.readFile("/home/rahul/Desktop/nodejs/firstpracticse/foldercreate/chat/input.txt",'utf-8',(err,data)=>
    {
        //res.end(`<h1>${data}</h1>`);
        //console.log(data);
        d=data;
        res.write('<html>');
        res.write('<head>');
        res.write('<title> chat app</title>');
        res.write('<head>');
        res.write('<body>');
        res.write(`<h3>${d}</h3>`);
        res.write('<form action="/message" method="POST"> <input type="txt" name="message"><button>Send</button>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    
    });
    console.log(d);
        //console.log(d);
        
    }
     if(req.url==='/message'&&req.method==='POST')
    {
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk.toString());
            body.push(chunk);
        });
        return req.on('end',()=>
        {
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1];
            fs.appendFile("/home/rahul/Desktop/nodejs/firstpracticse/foldercreate/chat/input.txt",message,err=>
            {
                res.statusCode='302';
           res.setHeader('Location','/')
          return res.end();
            });
     
        });
        
    }
})

app.listen(3300,'127.0.0.1',()=>
{
    console.log("server is run");
})