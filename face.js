/*/ check if the user as entered any valid info as listed in the hoisting 
below
1. check if the user enter any valid info
2. monitor the the info entered
3. create a standerd using regular expression
4. validate and store
*/
/*function gender(){
    let tags = document.getElementsByClassName('status');
    for(let i=0; i<tags.length; i++){
        if(tags[i] == tags[0] || tags[i] == tags[1] || tags[i] == tags[2]){
            state = tags[i].checked
            if(state == true){
                console.log(tags[i].value)
            }
        }
        
    }
}*/
function sign_up(fname, sName, tel, password){
    fname = document.getElementById('fname').value.trim();
    sName = document.getElementById('sName').value.trim();
    tel = document.getElementById('tel').value.trim();
    password = document.querySelector('#pwd').value.trim();
    fnameLength = fname.length;
    sNameLength = sName.length;
    telLength = tel.length;
    passwordLength = password.length;
    const code_warn = document.querySelector('#info');
    if(passwordLength !=0 && fnameLength !=0 && fnameLength !=0 && sNameLength !=0){
        //password must contain four digit
        const pwd_warn = document.querySelector('#pwd_warn')
        console.log(pwd_warn);
        const pattern = /\d{4}/;
        if(pattern.test(password)){
            if(true){
                const pattern = /[a-z]/i;
                if(pattern.test(fname) && pattern.test(sName)){
                    const fname_warn = document.querySelector('#fname_warn');
                    if(true){
                        const pattern = /\d{11,}/
                        if(pattern.test(tel)){
                            if(true){
                                let tags = document.getElementsByClassName('status');
                                const gender = []
                                for(let i=0; i<tags.length; i++){
                                    if(tags[i] == tags[0] || tags[i] == tags[1] || tags[i] == tags[2]){
                                        state = tags[i].checked
                                        if(state == true){
                                            let sex = tags[i].value;
                                            gender.push(sex);
                                        }
                                    }
                                } 
                                const retain = []
                                console.log(gender)
                                let userData = localStorage.getItem('userData');
                               // console.log(code_warn);
                                if(userData == null || userData == undefined){
                                   /* fmale = document.querySelector('.fmale').checked;
                                    male = document.querySelector('.male').checked;
                                    custom = document.querySelector('.custom').checked;*/                  
                                    retain.push({fname, sName, password, tel, gender});
                                    userData = localStorage.setItem('userData', JSON.stringify(retain));
                                    code_warn.style.background = 'linear-gradient(to right, red, green)';
                                    code_warn.style.color = 'aliceblue';
                                    code_warn.textContent = 'registered';
                                }else{
                                    let modify = JSON.parse(userData);
                                    for(var i=0; i<modify.length; i++){
                                        if(modify[i].fname == fname || modify[i].password == password || modify[i].tel == tel){
                                            retain.push(1);
                                            code_warn.style.background = 'red';
                                            code_warn.style.color = 'aliceblue';
                                            code_warn.textContent = 'user exist'
                                            console.log(retain[0])
                                            alert('user exist');
                                            break;
                                        }    
                                    }
                                    if(retain[0] !=1){
                                        modify.push({fname, sName, tel, password, gender});
                                        localStorage.setItem('userData', JSON.stringify(modify));
                                        code_warn.style.background = 'linear-gradient(to right, red, green)';
                                        code_warn.style.color = 'aliceblue';
                                        code_warn.textContent = 'registered';
                                    }
                                  
                                }

                            }
                        }else{
                            fname_warn.style.color = 'aliceblue';
                            fname_warn.style.backgroundColor = 'red';
                            fname_warn.textContent = 'Tel mismatch';
                        }
                       
                    }
                }else{
                    fname_warn.style.color = 'aliceblue';
                    fname_warn.style.backgroundColor = 'red';
                    fname_warn.textContent = 'username mismatch';
                }
            }
        }else{
            pwd_warn.style.color = 'aliceblue';
            pwd_warn.style.backgroundColor = 'red';
            pwd_warn.textContent = 'password mismatch';
        }
    }else{
        code_warn.style.color = 'aliceblue';
        code_warn.style.backgroundColor = 'red';
        code_warn.textContent = 'fill the required field';
    }
}
