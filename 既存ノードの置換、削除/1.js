/*
書名リストのリンクをクリックすると、対応する書籍画像を表示する
*/

document.addEventListener('DOMContentLoaded', function() {

    var list = document.getElementById('list');　//一覧リスト
    var pic = document.getElementById('pic');　//画像描画
    var del = document.getElementById('del');　//削除ボタン

    //<ul id="list">配下のリンクをクリックしたときの処理
    list.addEventListener('click', function(e) {

        //data-isbn属性から、<a>タグにひも付いたisbnの値をgetAttribute()メソッドで取得
        //e.taragetがポイント=>イベントオブジェクトのtargetプロパティ
        //html側でa要素に設定したdata-xxxxx属性を使えば、スクリプトで使うパラメーターを自由に渡すことができる
        var isbn = e.target.getAttribute('data-isbn');

        //isbn値が取得できた場合にのみ処理を実行
        if (isbn) {
            
            //img要素を生成する
            var img = document.createElement('img');
            img.src = 'http://www.wings.msn.to/books/' + isbn + '/' + isbn + '.jpg';
            img.alt = e.innerHTMl;
            img.height = 300;
            img.width = 216;

            //<div id="pic">配下にimg要素が存在するか、画像を表示中かどうかを確認
            if(pic.getElementsByTagName('img').length > 0) {

                //img要素が存在する場合、新たなimg要素で置換 => 高度なテクニック
                //ノードを置換する
                //子ノードを置換するのはreplaceChild()メソッド
                //要素オブジェクト.replaceChild(置換後のノード, 置換対象のノード)
                //置換後のノード => 新たに作成したimg要素
                //置換対象のノード => <div id="pic">配下のimg要素
                //置換対象のノードは、現在のノードの子ノードでなければいけないので注意
                //pic.firstChildでもpc.lastChildでもOK
                pic.replaceChild(img, pic.firstChild);

            } else {

                //img要素が存在しない場合、新たに追加し、削除ボタンを有効に
                del.disabled = false;
                pic.appendChild(img);

            }
        }
    }, false);

    //削除ボタンがクリックされたときの処理
    del.addEventListener('click', function() {

        //<div id = "pic">配下の子要素を削除し、削除ボタンを有効に
        //pic.lastChildでもpic.firstChildでもOK
        pic.removeChild(pic.lastChild);
        del.disabled = true;

    }, false);

}, false);
