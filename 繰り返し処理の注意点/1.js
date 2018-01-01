/*
<ul id="first">要素から取り出した<li>要素と同じものを、<ul id="second">要素に追加する

下記内容がhtmlに表示される
PHP
C#
Ruby
Python
Java

PHP
C#
Ruby
Python
Java

*/

document.addEventListener('DOMContentLoaded', function() {
    var second = document.getElementById('second'); //secondを取得
    var li = document.getElementsByTagName('li');　//liを取得

    //for(var i = 0; i < li.length; i++)だと正しく動作しない
    //forループのたびに、ノードの個数(li.length)も変化してしまい無限ループが発生する
    //forループの書き方を変えてあげる
    //li.lengthプロパティの値を変数lenに格納することで、lengthプロパティプロパティの変化が終了条件に影響しなくなる

    //for(var i = 0; i < li.length; i++)
    for(var i =0, len = li.length; i < len; i++)　//liをforループで回す
    {
        var item = li.item(i); //すべての要素をitem(i)メソッドで取得して変数に代入
        var new_li = document.createElement('li');　//要素を追加するため、li要素を作成する
        var new_text = document.createTextNode(item.textContent); //すべてのli要素を取得した変数itemをテキスト表示する
        new_li.appendChild(new_text); //new_liにnew_textを追加する
        second.appendChild(new_li);　//seconにnew_liを追加する
    }

}, false)