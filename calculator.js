let display=document.getElementById("input");
        function appendvalue(value){
            display.value+=value;
        }
        function clean(){
            display.value="";
        }
        function calculate() {
            try{
                display.value=eval(display.value);
            } catch {
                display.value="Error";
            }
        }
