//try catch
const json = '{"brand" "AmigoesCode"}'
try{
    console.log(JSON.parse(json))
}catch(error){
    console.log(`opps cannot parsxe json: ${json}`)
    console.log(error)
} finally{
    console.log("finally was invoked")
}