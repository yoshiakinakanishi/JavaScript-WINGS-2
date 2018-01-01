document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {

        //2つのテキストボックスを取得
        var name = document.getElementById('name'); //1つ目のテキストボックス
        var url = document.getElementById('url');　 //2つ目のテキストボックス

        //a要素を生成
        var anchor = document.createElement('a');
        //a要素のhref属性を設定
        anchor.href = url.value; //2つ目のテキストボックスにvalueプロパティを追加
        //テキストノードを生成
        var text = document.createTextNode(name.value) //1つ目のテキストボックスにvalueプロパティを追加
        //a要素の直下に追加
        anchor.appendChild(text);

        //br要素を生成
        var br = document.getElementById('br');

        //<div id="list">を取得
        var list = document.getElementById('list');

        //<div id="list">の直下にa要素／br要素の順番で追加
        list.appendChild(anchor);
        list.appendChild(br);

    }, false)
}, false)