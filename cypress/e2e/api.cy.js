let isbnRandomNumber=Math.floor(Math.random()*77654)
let  aisleRandomNumber=Math.floor(Math.random()*123654)

let urlOfPostRequest="https://rahulshettyacademy.com/Library/Addbook.php"
let urlOfGetRequest=`https://rahulshettyacademy.com/Library/GetBook.php?ID=${isbnRandomNumber}${aisleRandomNumber}`
let urlOfDeleteRequest="https://rahulshettyacademy.com/Library/DeleteBook.php"

let auther_names=["yaman","ali","leen","sara"]
let randomIndex=Math.floor(Math.random()*auther_names.length)

describe('api test', () => {
    it('post request test', () => {
       let rquestBody={
        name: " hello world!",
        isbn: isbnRandomNumber,
        aisle: aisleRandomNumber,
        author: auther_names[randomIndex]
       } 
       cy.request({
        method:"POST",
        url:urlOfPostRequest,
        body:rquestBody
       }).then((response)=>{
        cy.log(response.body)
        cy.log(response.status)
        expect(response.body.Msg).to.eq("successfully added")
        expect(response.status).to.eq(200)


       })
    
    });
        
    
    it(' get request test', () => {
         cy.request({
            method:"GET",
            url:urlOfGetRequest

        }).then((response)=>{
            cy.log(response.body[0].book_name)
            cy.log(response.body[0].author)
            expect(response.status).to.eq(200)
            expect(response.body[0]).to.have.property("book_name")
        })

    
    });
    it('delete request test', () => {
        let deleteRequestBody=

            {
                "ID" : `${isbnRandomNumber}${aisleRandomNumber}`
                }
                 

        
        cy.request({
            method:"DELETE",
            url: urlOfDeleteRequest,
            body:deleteRequestBody


        }).then((response)=>{
            cy.log(response.body)
            cy.log(response.status)
            expect(response.status).to.eq(200)
            expect(response.body.msg).to.eq("book is successfully deleted")
            
            



        });
        
    });
    
    
});