"use strict";
window.addEventListener("DOMContentLoaded",
    function() {
        if(typeof localStorage === "undefined") {
            window.alert("このブラウザはLocal Storage機能がうされていません");
            return;
        } else {
            viewStorage();
            saveLocalStorage();
            selectTable();
            delLocalStorage();
            allClearLocalStorage();

        }
},false
); 
/* --------saveLocalStorage------- */
function saveLocalStorage() {
    const save = document.getElementById("save");
    save.addEventListener("click",
    function(e) {
        e.preventDefault();
        const key = document.getElementById("textKey").value;
        const value = document.getElementById("textMemo").value;

       /* if(key==""||value=="") {
            window.alert("Key、Memoはいずれも必須です。");
            return;
        }else{
            let w_confirm = confirm("LocalStorageに\n ("+ key + " " + value +") \n保存します。\nよろしいですか？");
            if(w_confirm === true){
                localStorage.setItem(key,value);
                viewStorage();
                let w_msg = "LocalStorage"+ " " + key + " " + value + " " + "を保存しました。";
                window.alert(w_msg);
                document.getElementById("textKey").value="";
                document.getElementById("textMemo").value="";
            }

        }*/
        
        if (key === "" || value === "") {
            Swal.fire({
                title: "Memo app",
                html: "Key, Memoはいずれも必須です。",
                type: "error",
                allowOutsideClick: false
            });
            return;
        } else {
            let w_msg = "LocalStorageに\n (" + key + " " + value + ") \n保存しますか？";
                Swal.fire({
                    title: "Memo app",
                    html: w_msg,
                    type: "question",
                    showCancelButton: true
            })
            .then(function (result) {
                if (result.value === true) {
                    localStorage.setItem(key, value);
                    viewStorage();
                    let w_msg = "LocalStorage" + " " + key + " " + value + " " + "を保存しました。";
                        Swal.fire({
                            title: "Memo app",
                            html: w_msg,
                            type: "success",
                            allowOutsideClick: false
                    });
                    document.getElementById("textKey").value = "";
                    document.getElementById("textMemo").value = "";
                }
            });
        }
    }, false);
};
/* --------selectTable-------- */
function selectTable() {
    const list = document.getElementById("select");
    select.addEventListener("click",
    function(e) {
        e.preventDefault;
        selectCheckBox("select");
    },false
 );
}

/* -------- viewStorage------- */

function viewStorage() {
    const list = document.getElementById("list");

    while(list.rows[0]) list.deleteRow(0);

    for(let i=0; i < localStorage.length; i++) {
        let w_key =localStorage.key(i);

        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");

        list.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        // td1.innerHTML="<input name='radio1' type='radio'>";
        td1.innerHTML="<input name='chkbox1' type='checkbox'>";
        td2.innerHTML=w_key;
        td3.innerHTML=localStorage.getItem(w_key);
        td4.innerHTML = "<img src='img/2074169.png' class='trash'>";
    }
    
    $("#table1").tablesorter({
        sortList:[[1, 0]]
    });

    $("#table1").trigger("update"); 

}
/* ------selectRadioBtn------ */
/* 
function selectRadioBtn() {
    let w_sel ="0";
    const radio1 = document.getElementsByName("radio1");
    const table1 = document.getElementById("table1");

    for(let i=0; i < radio1.length; i++) {
        if(radio1[i].checked) {
            document.getElementById("textKey").value = table1.rows[i+1].cells[1].firstChild.data;
            document.getElementById("textMemo").value = table1.rows[i+1].cells[2].firstChild.data;
            return w_sel ="1";
        }
    }
    window.alert("1つ選択(select)してください。");
}
 */


/* ------selectCheckBox---------- */

function selectCheckBox(mode) {
    // let w_sel ="0";
    let w_cnt = 0;
    const chkbox1 = document.getElementsByName("chkbox1");
    const table1 = document.getElementById("table1");
    let w_textKey = "";
    let w_textMemo = "";

    for(let i=0; i < chkbox1.length; i++) {
        if(chkbox1 [i].checked) {
            if(w_cnt === 0) {
                w_textKey = table1.rows[i+1].cells[1].firstChild.data;
                w_textMemo= table1.rows[i+1].cells[2].firstChild.data;
            }
            w_cnt++;
        }

    }
    document.getElementById("textKey").value=w_textKey;
    document.getElementById("textMemo").value=w_textMemo;
    
    if (mode=="select") {
       if(w_cnt === 1){
           return w_cnt;
       }else{
        Swal.fire({
            title: "Memo app",
            html: "1つ選択(select)してください。",
            type: "error",
            allowOutsideClick: false
        });
           //window.alert("1つ選択(select)してください。");
       }
    }
    if (mode=="del") {
       if(w_cnt >=1){
           return w_cnt;
       }else{
        Swal.fire({
            title: "Memo app",
            html: "1つ選択(select)してください。",
            type: "error",
            allowOutsideClick: false
        });
          //window.alert("1つ選択(select)してください。");
    }
    }
}


/* -----delLocalStorage----(Delete one by one) */

function delLocalStorage() {
    const del = document.getElementById("del");
    del.addEventListener("click",
    function(e) {
        e.preventDefault();
        const chkbox1 =document.getElementsByName("chkbox1");
        const table1 =document.getElementById("table1");
        // let w_sel ="0";
        let w_cnt = 0;
        w_cnt =selectCheckBox("del"); 

        /*if(w_sel === "1")*/
        /*if(w_cnt >= 1){
        //  const key = document.getElementById("textKey").value;
        //  const value = document.getElementById("textMemo").value;
         let w_confirm = window.confirm("LocalStorageから選択されてる" + w_cnt +"件を削除（delete）します？");
        if(w_confirm === true){
        //  localStorage.removeItem(key);
        for(let i=0; i < chkbox1.length; i++) { 
            if(chkbox1[i].checked) {
               localStorage.removeItem(table1.rows[i+1].cells[1].firstChild.data);
            }
        }
         viewStorage();
            let w_msg = "LocalStorageから"+  w_cnt + "件を削除(delete)しました。";
            window.alert(w_msg);
            document.getElementById("textKey").value="";
            document.getElementById("textMemo").value="";
            }
        }*/
        if(w_cnt >= 1){
         let w_msg = "LocalStorageから選択されてる" + w_cnt +"件を削除（delete）します？";
            Swal.fire({
                title: "Memo app",
                html: w_msg,
                type: "question",
                showCancelButton: true
                    })
    .then(function (result) {
        if (result.value) {
            for(let i=0; i < chkbox1.length; i++) { 
                if(chkbox1[i].checked) {
                localStorage.removeItem(table1.rows[i+1].cells[1].firstChild.data);
                }
            }
         viewStorage();
                let w_msg = "LocalStorageから"+  w_cnt + "件を削除(delete)しました。";
                    Swal.fire({
                        title: "Memo app",
                        html: w_msg,
                        type: "success",
                        allowOutsideClick: false
                });
                document.getElementById("textKey").value="";
                document.getElementById("textMemo").value="";
            }
        });
    }
 }, false);

 //version-up5

 const table1 = document.getElementById("table1");
 table1.addEventListener("click", (e) => {// eはイベントの対象要素…変数なので、名前はなんでもよい。
    if (e.target.classList.contains("trash") === true) {
        let tr = e.target.parentNode.parentNode;
        let key = tr.cells[1].textContent; 

        tr.parentNode.deleteRow(tr.sectionRowIndex);// trのインデックスを取得して行を削除する
        localStorage.removeItem(key);

        viewStorage();
        document.getElementById("textKey").value = "";
        document.getElementById("textMemo").value = "";
    }
});


 

}

/* -------- allClearLocalStorage--------- */

function allClearLocalStorage() {
    const allClear= document.getElementById("allClear");
    allClear.addEventListener("click",
    function(e) {
        e.preventDefault();
        /*let w_confirm = confirm("LocalStorageのデータをすべて削除します。\nよろしいですか？");
        if (w_confirm === true) {
            localStorage.clear();
            viewStorage();
            let w_msg ="LocalStorage のデータをすべて削除しました。";
            window.alert(w_msg); document.getElementById("textKey").value="";
            document.getElementById("textMemo").value="";
        }*/
        let w_msg = "LocalStorageのデータをすべて削除します。\nよろしいですか？";
        Swal.fire({
                    title: "Memo app",
                    html: w_msg,
                    type: "question",
                    showCancelButton: true
            })
        .then(function (result) {
            if (result.value) {
                        localStorage.clear();
                        viewStorage();
                        let w_msg = "LocalStorage のデータをすべて削除しました.";
                            Swal.fire({
                                title: "Memo app",
                                html: w_msg,
                                type: "success",
                                allowOutsideClick: false
                });
            document.getElementById("textKey").value="";
            document.getElementById("textMemo").value="";
        }
    });
}, false);
}