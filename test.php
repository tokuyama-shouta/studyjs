<?php 

echo "helloworld"; 

//変数
//ブログのタイトル
$title = "PHPテスト";
$content = 'PHPテストです。';
$post_at = '2020/03/23';
$tag = ['PHP','プログラミング'];
$status = true;

//定数
const ID = 1;
echo ID;
echo '<br>';
echo $title;
echo '<br>';
echo $content;
echo '<br>';
echo $post_at;
echo '<br>';
print_r($tag);

//データ型
ver_dump(ID);

?> 