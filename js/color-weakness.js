// <-------------------- time ------------------------->
var start = document.getElementById('start');

        const s1 = document.querySelector('.s1');
        const s2 = document.querySelector('.s2');
        const s3 = document.querySelector('.s3');
        const p = document.querySelector('.pause');

        const pause = document.querySelector('.stop');
        const continous = document.querySelector('.continous');
        const re = document.querySelector('.restart');
        const back = document.querySelector('#back');
        const time = document.querySelector('#countdown');

        var countdownTimer = setInterval('secondPassed()', 100000000000000);


        start.addEventListener("click", function(){
            s2.classList.add('z40');
            var countdownTimer = setInterval('secondPassed()', 1000);
        });

        var countdown = document.getElementById('countdown');
        var countdown_none = document.getElementById('countdown-none');
        var seconds = 60;

        function secondPassed() {

            var remainingSeconds = seconds % 60;

            if (seconds < 10) {
                remainingSeconds = "0" + remainingSeconds; 
                countdown.classList.add('red');
                countdown_none.classList.add('red-none');
                countdown.classList.add('shake');
                countdown_none.classList.add('shake-none');
            }

            countdown.innerHTML = remainingSeconds + ' s';
            countdown_none.innerHTML = remainingSeconds + ' s';

            if (seconds == 0) {
                clearInterval(countdownTimer);
                countdown.classList.remove('shake');
                countdown.innerHTML = 'Time Out！';
                countdown_none.classList.remove('shake-none');
                countdown_none.innerHTML = 'Time Out！';
                s3.classList.add('z50');
            } else {
                seconds--;
            }

        };

        re.addEventListener("click", function(){
            location.reload();
        });

        back.addEventListener("click", function(){
            location.reload();
        });

        // <!-------------------- color ----------------------->
        var level = 2;
        var count = 0;
        var scores = 0;


        game();

        function game(){
            size = 100 / level;

            var box = document.querySelector('.box');
            box.innerHTML = "";

            var color = `rgb(${Math.floor(Math.random()*253)} , ${Math.floor(Math.random()*253)} , ${Math.floor(Math.random()*253)})`;

            for (i = 0; i < level**2 ; i++) {
                box.innerHTML += `<div class="innerbox" style="width:${size}%; height:${size}%;background-color:${color}"></div>`;
            }

            var answer = Math.floor(Math.random()*level**2)+1;
            var abox = document.querySelector(`.box .innerbox:nth-child(${answer})`);
            abox.classList.add('answer-box');
            abox.style.opacity = 0.5 + level * 0.05;

            var not_abox_All = document.querySelectorAll(`.box .innerbox:not(:nth-child(${answer}))`);
            not_abox_All.forEach(function(nbox,index){  // 第一個參數 nbox: 代表單元個體(這是一個box)
                                                        // 第二個參數 index: 代表註標(標示編號)
                nbox.addEventListener('click',function(){
                    alert('答錯囉!')
                })
            })

            var answerbox = document.querySelector('.answer-box');
            answerbox.addEventListener('click',function(){
                count++;
                if (count == level){
                    level ++ ;
                    count = 0;
                }
                
                game();
            })

            var pts = document.querySelector('#points');
            var pts_none = document.querySelector('#points-none');
            
            answerbox.addEventListener('click',function(){
                scores += 1;

                if (scores < 10) {
                    pts.innerHTML = '0' + scores + ' p';
                    pts_none.innerHTML = '0' + scores + ' p';

                }else {
                    pts.innerHTML = scores + ' p';
                    pts_none.innerHTML = scores + ' p';
                }
                
            })

            var rate = document.querySelector('.rate');

            if (scores >= 39) {
                rate.innerHTML = '天賦異稟！您有非常出色的視力！真了不起！';
            } else if (scores >= 29) {
                rate.innerHTML = '哇！您已經有高於一般人的水準了！';
            } else if (scores >= 14) {
                rate.innerHTML = '很不錯！可以再接再厲！';
            } else if (scores < 15){
                rate.innerHTML = '嗯…… 您似乎需要多補充葉黃素喔!';
            } else {
                rate.innerHTML = "";
            }
        }

        // <!------------------- alert ------------------->
        var alert_title = "Oops!";
        var alert_button = "Ok";
        
        if(document.getElementById) {
            window.alert = function(txt) {
            customAlert(txt);
            }
        }
        
        function customAlert(txt) {
        d = document;
        
        if(d.getElementById("modalContainer")) return;
        
        mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
        mObj.id = "modalContainer";
        mObj.style.height = d.documentElement.scrollHeight + "px";
        
        alertObj = mObj.appendChild(d.createElement("div"));
        alertObj.id = "alertBox";
        if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
        alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
        alertObj.style.visiblity="visible";
        
        h1 = alertObj.appendChild(d.createElement("h1"));
        h1.appendChild(d.createTextNode(alert_title));
        
        msg = alertObj.appendChild(d.createElement("p"));
        msg.innerHTML = txt;
        
        btn = alertObj.appendChild(d.createElement("a"));
        btn.id = "closeBtn";
        btn.appendChild(d.createTextNode(alert_button));
        btn.href = "#";
        btn.focus();
        btn.onclick = function() { removeCustomAlert();return false; }
        
        alertObj.style.display = "block";
        
        }
        
        function removeCustomAlert() {
        document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
        }
        function ful(){
        alert('Alert this pages');
        }