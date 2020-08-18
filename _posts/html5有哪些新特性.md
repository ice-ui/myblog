---
toc: true

title: HTML5新特性

tags: 
  - HTML5
---

### HTML5新特性

<!--more -->

#### 一：声明方式：

1. HTML4规定了三种声明方式，分别是：严格模式、过渡模式和框架模式；HTML5因为不是SGML的子集，只需要<!DOCTYPE>就可以。**<!DOCTYPE html>**

#### 二：语义化更好的内容标签

1. header
2. footer
3. article
4. aside
5. section
6. details
7. summary
8. dialog

#### 三、音频、视频

1. audio
2. video

#### 四、表单控件

1. color:用于选取颜色
2. date:从一个日期选择器选择一个日期
3. datetime:选择一个日期(UTC时间)
4. datetime-local：选择一个日期和时间（无时区）
5. email:包含email地址的输入域
6. month:选择月份
7. number:包含数值的输入域

> <input type="number" name="quantity" min="1" max="5">

8. range:包含一定范围内数字值的输入域。
9. search:搜索域
10. tel:定义输入电话号码字段
11. time:定义可输入时间控制器
12. url:用于应该包含URL地址的输入域

### HTML5引入新的表单属性

1. form新属性

- autocomplete
- novalidate

2. input新属性

- autocomplete
- autofocus
- form
- formaction
- formenctype
- formethod
- formnovalidate
- formtarget
- height和width
- list
- min、max
- multiple
- pattern
- placeholder
- required
- step

#### HTML5的音频和视频属性

支持的格式包括MP3、Wav和Ogg

```<audio >:用于在文档中表示音频文件，可以包含多个音频资源，可以使用src属性或者<sourse>元素来进行描述```

##### 第一种写法：

> ```<audio src="***.mp3"></audio>```

##### 第二种写法：

> ```
> <audio controls>
>   <source src="a.mp3" type="audio/mpeg">
>   您的浏览器不支持音频嵌入功能
>   </audio>
> ```
>
> 

> ```
> 
> <audio controls="controls">
> <sourse src="a.ogv" type="audio/wav">
> <sourse src="b.mp3 type="audio/mpeg>
> 您的浏览器不支持audio元素
> </audio>
> 
> ```
>
> 

#### 视频

支持的格式包括：MP4、WebM和Ogg

> ```
> <video controls width="200"
> <sourse src="flower.webm" type="video/webm">
> <sourse src="flower.mp4" type="video/mp4">
> 您的浏览器不支持video标签
> </video>
> 
> 
> ```
>
> 

#### HTML5支持的新媒体元素

**<embeb>**:定义嵌入的内容，比如插件

> <embeb type="video/quicktime" src="Fishing.mov">

**<source>**:定义多个数据源很有用

**<track>**：为诸如video元素之类的媒体规定外部文本轨道。用于规定字幕文件或其他包含文本的文件，当媒介播放时，这些文件是可见的。

#### Doctype文档类型

三种DTD类型：严格版本、过渡版本以及基于框架的HTML文档。

HTML4.01规定了三种文档类型：Strict、Transitional以及Fraeset。

XHTML1.0规定了三种XML文档类型：Strict、Transitional以及Fraeset。

Standards模式（严格模式）用于呈现遵循最新标准的网页。

Quirks模式（松散呈现模式或者兼容模式）用于呈现为传统浏览器而设计的网页。

