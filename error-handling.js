//try catch
const json = '{"brand" "AmigoesCode"}'
try{
    console.log(brand)
    console.log(JSON.parse(json))
}catch(error){
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
} finally{
    console.log("finally was invoked")
}