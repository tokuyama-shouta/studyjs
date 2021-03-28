<?php 

// echo "helloworld"; 

//変数
//ブログのタイトル
const ID = 1;
$title = "PHPテスト";
$content = 'PHPテストです。';
$post_at = '2020/03/23';
$tag = ['PHP','プログラミング'];
$status = true;

const ID = 2;
$title2 = "PHPテスト";
$content2 = 'PHPテストです。';
$post_at2 = '2020/03/23';
$tag2 = ['PHP','プログラミング'];
$status2 = true;

$blog1 = array(
  'id' => ID,
  'title' => $title,
  'content' => $content,
  'post_at' => $post_at,
  'tag' => $tag,
  'status' => $status,
);

$blog2 = array(
  'id2' => ID2,
  'title2' => $title2,
  'content2' => $content2,
  'post_at2' => $post_at2,
  'tag2' => $tag2,
  'status2' => $status2,
);
echo '<pre>';
var_dump($blog2);
echo '</pre>';
// echo $blog1['title'];

$blogs = [$blog1,$blog2];

// echo '<pre>';
// var_dump($blogs);
// echo '</pre>';

//定数
// echo ID;
// echo '<br>';
// echo $title;
// echo '<br>';
// echo $content;
// echo '<br>';
// echo $post_at;
// echo '<br>';
// print_r($tag);

// データ型
// ver_dump(ID);

// foreach($blog1 as $blog) {
//   echo $blog;
// }

// foreach($blog2 as $key => $value) {
//   echo $key.$value;
// }

// foreach($blogs as $blog) {
//   foreach($blog as $value) {
//     echo $value;
//   }
// }
$_blog = $_POST;
if($blog['publish_status'] === 'publish'){
  foreach($blog as $key => $value) {
    echo $key.htmlspecialchars($value,ENT_QUOTES,'UTF-8');
  }
} elseif($blog['publish_status'] === 'un_publish'){
 echo '公開中の記事はありません。';
} else {
  echo '記事はありません。';
}





?> 