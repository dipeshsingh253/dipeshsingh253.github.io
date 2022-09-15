
        let cursor1 = document.querySelector('.cursor-1');
        let cursor2 = document.querySelector('.cursor-2');


        window.onmousemove = (e) => {
            console.log("working....")
            console.log(e.pageX+" "+e.pageY);

            if(e.pageX<=475){
                console.log("hey bro");
                cursor1.style.backgroundColor = "white";
                cursor2.style.border = "1px solid white";
            }
            else{
                cursor1.style.backgroundColor = "#1a1919";
                cursor2.style.border = "1px solid #1a1919";
            }
            cursor1.style.top = e.pageY + 'px';
            cursor1.style.left = e.pageX + 'px';
            cursor2.style.top = e.pageY + 'px';
            cursor2.style.left = e.pageX + 'px';
        }

        document.querySelectorAll('a').forEach(links => {

            links.onmouseenter = () => {
                cursor1.classList.add('active');
                cursor2.classList.add('active');
            }

            links.onmouseleave = () => {
                cursor1.classList.remove('active');
                cursor2.classList.remove('active');
            }
        });