document.addEventListener('DOMContentLoaded', function() {
    
    var books = [
        { title: '独習PHP', price: 3200 },
        { title: '独習C#', price: 6200 },
        { title: '独習Ruby', price: 8200 }
    ];

    //var list = document.getElementById('list');

    //コンテンツを貯めるためのDocumentFragmentオブジェクトを生成
    var frag = document.createDocumentFragment();

    //上の配列booksを順番にli要素に整形
    for(var i = 0; i < books.length; i++) {
        var b = books[i]
        var li = document.createElement('li');
        var text = document.createTextNode(b.title + ':' + b.price + '円');

        li.appendChild(text);
        //list.appendChild(li); =>これでも正しく動作はするが、文書ツリーにli要素を追加したタイミングで再描画されるためパフォーマンスが悪い・・・
        frag.appendChild(li);
    }

    //li要素を上でやるよりも、下記のようにli要素群をまとめて文書ツリーに追加
    document.getElementById('list').appendChild(frag);

}, false)

/*
以下がhtml表示されるだけ
独習PHP:3200円
独習C#:6200円
独習Ruby:8200円
*/