(function () {
    "use strict";
    /*global window,alert*/
    var UIlogic, goals;
    goals = { 
    Name: "", 
    des: "", 
    nums:"", 
    cope: ""
    };
    UIlogic = {
            loadStyle: function () {
                var header, styleSheet;
                header = document.getElementsByTagName('head')[0];
                styleSheet = document.createElement('link');
                styleSheet.rel = 'stylesheet';
                styleSheet.type = 'text/css';
                styleSheet.href = 'suAppStyle.css';
                styleSheet.media = 'all';
                header.appendChild(styleSheet);
            },
            suApp: function () {
                var elems, introBtn, loading, gBack, Qlen, quotes, rand, QuoteDay;
                
                quotes = ["\"Start by doing what's necessary; then do what's possible, and suddenly you are doing the impossible\" ~Francis of Assisi",
                          "\"I can't change the direction of the wind, but I can adjust my sails to always reach my destination\" ~Jimmy Dean",
                          "\"Nothing is impossible, the word itself says 'I'm possible'!\" ~Audrey Hepburn",                
                          "\"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it\" ~Steve Jobs",
                          "\"Try to be a rainbow in someone's cloud\" ~Maya Angelou",
                          "\"Change your thoughts and you change your world\" ~Norman Vincent Peale",
                          "\"It is during our darkest moments that we must focus to see the light\" ~Aristotle Onassis",
                          "\"My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style\" ~Maya Angelou",
                          "\"Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve\" ~Mary Kay Ash",
                          "\"Today I choose life. Every morning when I wake up I can choose joy, happiness, negativity, pain... To feel the freedom that comes from being able to continue to make mistakes and choices - today I choose to feel life, not to deny my humanity but embrace it\" ~Kevyn Aucoin",
                          "\"We can't help everyone, but everyone can help someone\" ~Ronald Reagan",
                          "\"Don't judge each day by the harvest you reap but by the seeds that you plant\" ~Robert Louis Stevenson",
                          "\"There are two ways of spreading light: to be the candle or the mirror that reflects it\" ~Edith Wharton",
                          "\"I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion'\" ~Muhammad Ali",
                          "\"If opportunity doesn't knock, build a door\" ~Milton Berle",
                          "\"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them\" ~Bruce Lee",
                          "\"What lies behind you and what lies in front of you, pales in comparison to what lies inside of you\" ~Ralph Waldo Emerson",
                          "\"Thousands of candles can be lighted from a single candle, and the life of the candle will not be shortened. Happiness never decreases by being shared\" ~Buddha",
                          "\"Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree\" ~Martin Luther",
                          "\"Don't let the fear of striking out hold you back\" ~Babe Ruth",
                          "\"Someone is sitting in the shade today because someone planted a tree a long time ago\" ~Warren Buffett",
                          "\"No matter what people tell you, words and ideas can change the world\" ~Robin Williams",
                          "\"Everyone here has the sense that right now is one of those moments when we are influencing the future\" ~Steve Jobs",
                          "\"People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you're lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life\" ~Carrie-Anne Moss",
                          "\"The best preparation for tomorrow is doing your best today\" ~H. Jackson Brown, Jr.",
                          "\"Everyone has inside of him a piece of good news. The good news is that you don't know how great you can be! How much you can love! What you can accomplish! And what your potential is!\" ~Anne Frank",
                          "\"To the mind that is still, the whole universe surrenders\" ~Lao Tzu",
                          "\"What we achieve inwardly will change outer reality\" ~Plutarch",
                          "\"Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart\" ~Marcus Aurelius",
                          "\"Two roads diverged in a wood and I - I took the one less traveled by, and that has made all the difference\" ~Robert Frost",
                          "\"From a small seed a mighty trunk may grow\" ~Aeschylus",
                          "\"If a man does not keep pace with his companions, perhaps it is because he hears a different drummer. Let him step to the music which he hears, however measured or far away\" ~Henry David Thoreau",
                          "\"Let us dream of tomorrow where we can truly love from the soul, and know love as the ultimate truth at the heart of all creation\" ~Michael Jackson",
                          "\"How wonderful it is that nobody need wait a single moment before starting to improve the world\" ~Anne Frank",
                          "\"Find out who you are and be that person. That's what your soul was put on this Earth to be. Find that truth, live that truth and everything else will come\" ~Ellen DeGeneres",
                          "\"Tomorrow is the most important thing in life. Comes into us at midnight very clean. It's perfect when it arrives and it puts itself in our hands. It hopes we've learned something from yesterday\" ~John Wayne",
                          "\"Once I knew only darkness and stillness... my life was without past or future... but a little word from the fingers of another fell into my hand that clutched at emptiness, and my heart leaped to the rapture of living\" ~Helen Keller",
                          "\"Be brave enough to live life creatively. The creative place where no one else has ever been\" ~Alan Alda",
                          "\"The fact that I can plant a seed and it becomes a flower, share a bit of knowledge and it becomes another's, smile at someone and receive a smile in return, are to me continual spiritual exercises\" ~Leo Buscaglia",
                          "\"Do your little bit of good where you are; its those little bits of good put together that overwhelm the world\" ~Desmond Tutu",
                          "\"Happiness is not something you postpone for the future; it is something you design for the present\" ~Jim Rohn",
                          "\"The power of imagination makes us infinite\" ~John Muir",
                          "\"In a gentle way, you can shake the world\" ~Mahatma Gandhi"
                          ];
                Qlen = quotes.length;
                rand = Math.round(Math.random()*(Qlen - 1));
                
                elems = "<div id='header'><h1><center>Tutis</h1></center><hr id='hr1' /><div id='goHome'>&nbsp;Home</div><br /><div style='text-align:left;font-size:100%;'>&nbsp;In case of emergency please call National Suicide Prevention Lifeline Phone Number: <a href='tel:+18002738255'>1-800-273-8255</a>&nbsp;</div></div>";
                elems += "<div id='wrapper'><div><center><div id='intro'><center><br />Welcome to Tutis, an app meant to help people keep track of their condition while on the go!<h2>&nbsp;</h2><button id='introBtn' class='btnClass'>New</button><br /><br /><br /><button id='loadData' class='btnClass'>Load</button><br /><br /><br /><br /><div id='QuoteDay'></div></center></div><div id='dvContainer'><p style='color:red;'>There are no Entries at this time</p></div>";
                elems += "<br /><br /><br /><form id='formId' autocomplete='off'><label for='nameTxt' class='lblClass'>What are your warning signs?</label><br /><input id='nameTxt' class='c1'/><br />";
                elems += "<label for='des' class='lblClass'>What are your internal coping strategies?</label><br /><input id='des' class='c1' /><br />";
                elems += "<label for='numbers' class='lblClass'>Who are some of the people you can call?</label><br /><input id='numbers' class='c1' /><br />";
                elems += "<label for='cope' class='lblClass'>Plan of action to make the environment safer</label><br /><input id='cope' class='c1' />";
                elems += "</form><p id='spacer1'>&nbsp;<p>";
                elems += "<div id='spacer'>&nbsp;</div></div>";
                elems += "<div id='footer'>&nbsp;Developed by Ehawk based on Department of Veterans Affairs Suicide Prevention Guidelines.</div></center>";//footer
                body.innerHTML = elems;
                introBtn = document.getElementById("introBtn");
                introBtn.addEventListener('click', UIlogic.clearIntro, false);
                loading = document.getElementById("loadData");
                loading.addEventListener('click', UIlogic.LoadData, false);
                
                gBack = document.getElementById('goHome');
                gBack.addEventListener("click", resetPage, false);
                
                document.getElementById("QuoteDay").innerHTML = "<div>Quote of the Moment:</div>" + quotes[rand];
            },
            saveitem: function () {
                var lscount = localStorage.length; //Length
                var inputs = document.getElementsByClassName("c1");
                goals.Name = inputs[0].value;
                goals.des = inputs[1].value;
                goals.nums = inputs[2].value;
                goals.cope = inputs[3].value;
    //Convert to JSON/Store it
            localStorage.setItem("goals_" + lscount, JSON.stringify(goals));
            location.reload();
            },
            LoadData: function () {
                document.getElementById("intro").style.display = 'none';
                document.getElementById("dvContainer").style.display = 'block';
                var i, iCount, spnLog, renderData, datacount, key, goals, gBack1;
                datacount = localStorage.length;
            if (datacount > 0) {
                renderData = "<div><center>";
                renderData += "<div><h2>Safe Planner</h2></div><br />";
                for (i = 0; i < datacount; i++) {
                    key = localStorage.key(i); //Get Key 
                    goals = localStorage.getItem(key); //Get Data
                    try{
                       var data = JSON.parse(goals); //Parse Data
                    }
                    catch(e)
                    {
                      continue;
                    }
					renderData += "<div><h4>Triggers</h4></div>" + "<div>"+ data.Name + "</div><br />";
                    renderData += "<div><h4>Coping Strategy</h4></div>" + "<div>" + data.des +"</div><br />";
                    renderData += "<div><h4>People to Call</h4></div>"+ "<div>" + data.nums + "</div><br />";
                    renderData += "<div><h4>Safety Plan</h4></div>" +"<div>"+ data.cope + "</div><br />";
                    renderData += "<div class='xData' data-id='xData' data-index='"+key+"'>" + "Delete" + "</div><br />";
                    //set a data-id and data-index to this element, we need them to select the correct information.
                }
                renderData += "<br /></div></center></div>";
                dvContainer.innerHTML = renderData;
				
                Array.prototype.map.call(document.querySelectorAll("div[data-id='xData']"), function(element){
                      element.addEventListener("click", deleteRow, false); //attach a click handler to all delete buttons
                } );
            }
            },
            clearIntro: function () {
                document.getElementById("intro").style.display = 'none';
            }
        };//end of UIlogic
    function deleteRow() {
    localStorage.removeItem(this.getAttribute("data-index"));
    window.location.reload();
    }
    function resetPage () {
        window.location.reload();
    }
    window.onkeyup = function (e) {
        if (event.which == 13) {
            UIlogic.saveitem();
        }
    }    
    window.onload = function () {
        UIlogic.suApp();
        UIlogic.loadStyle();
    };
}());
