import Scanner from "./Scanner.js"
window.TemplateEngine = {
    render(temp,data){
        console.log("触发了render函数");

        let scanner = new Scanner(temp);
        
    }
}