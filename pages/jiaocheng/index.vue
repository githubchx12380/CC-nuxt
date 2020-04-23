<template>
  <div class="jiaocheng" :class="[{backopa:$store.state.todos.themeStyle},{textcolor:$store.state.todos.themeStyle}]">
      <posi-tion></posi-tion>
      <div class="flextitle">
          <div class="jctitle">最全的Chrome插件安装方法! 解决 CRX_HEADER_INVALID</div>
          <img src="@/assets/images/full.jpg" alt="">
      </div>
      <div style="font-size:20px;margin:20px 0 10px 0">前言</div>
      <div style="padding:0 10px">
          <p>近期大量用户下载或安装插件扩展时，遇到如下错误。</p>
          <p>无法从该网站添加应用、扩展程序和用户脚本</p>
          <img src="@/assets/images/0.jpg" alt="">
          <p>或者</p>
          <p style="font-weight:700;margin:10px 0">程序包无效 CRXHEADERINVALID 错误</p>
          <img src="@/assets/images/-1.jpg" alt="">
          <p style="font-weight:700;padding:3px 0">2019/12/30 更正一下插件安装失效的原因！</p>
          <p style="font-weight:700;padding:3px 0">原因是Chrome更新时，改变了头部信息打包方式！</p>
          <p style="font-weight:700;padding:3px 0">导致的老版本Chrome打包的crx插件，无法直接安装在新版本Chrome中</p>
          <p style="font-weight:700;padding:3px 0">举个例子,开发人员在2018年3月用chrome68把他写的插件打包成crx文件.</p>
          <p style="font-weight:700;padding:3px 0">此时用户也用chrome68,一切正常安装使用.</p>
          <p style="font-weight:700;padding:3px 0">等到chrome73发布的时候,头部打包方式就大改版了</p>
          <p style="font-weight:700;padding:3px 0">用户再安装"chrome68打包的crx"就会出现CRX_HEADER_INVALID错误</p>
          <p style="font-weight:700;padding:3px 0">这就说明这个插件不适合直接拖动安装</p>
          <p style="font-weight:700;padding:3px 0">解决方法一种就是要求作者用新版的chrome73再打包一次重新发布</p>
          <p style="font-weight:700;padding:3px 0">或者可以用下文会提到的方法2暴力安装或方法3商店直装来解决问题</p>
          <p style="font-weight:700;padding:3px 0">补充一下:判断的方法.看收录时间</p>
          <p style="font-weight:700;padding:3px 0">基本上收录这个插件的时间在2019年4月以及之前的,多半就是不能直接拖动安装的</p>
      </div>
      <div>
           <div style="font-size:20px;margin:20px 0 10px 0">正文</div>
      <div style="padding:0 10px">
          <p style="padding:5px 0">关于新版Chrome 安装扩展插件方法汇总（任选一种即可）</p>
          <p style="font-weight:700;font-size:17px;margin-bottom:15px;">一、 拖动安装(推荐)</p>
          <p style="font-size:13px">（一般更新日期比较近的，基本可以适用于此方法）</p>
          <p style="padding-top:15px">在地址栏输入 chrome://extensions/打开 开发者模式 的开关拖动 xxx.crx 文件到Chrome中间即可</p>
          <p style="padding-top:15px">如下图，按住 xxxxxx.crx 拖动到chrome扩展中心</p>
          <img src="@/assets/images/2.jpg" alt="" style="width:70%">
          <p style="padding:10px 0">弹出安装确认的提示框，说明操作成功，点击确定即可</p>
          <img src="@/assets/images/3.jpg" alt="" style="width:70%">
           <p style="font-weight:700;font-size:17px;margin-bottom:15px;">二、 暴力安装</p>
          <p style="font-size:13px">（不太推荐此方法，如果方法1拖动安装无效的情况下，可以尝试暴力安装）</p>
          <p style="padding-top:15px">把下载好的xxx.crx 的扩展名改为 xxx.zip</p>
          <p style="padding-top:15px">在地址栏输入 chrome://extensions/打开 开发者模式 的开关拖动 xxx.zip 文件到Chrome中间即可</p>
          <p style="padding-top:15px">如下图，按住 xxxxxx.zip 拖动到chrome扩展中心</p>
          <img src="@/assets/images/4.jpg" alt="" style="width:70%">
          <p style="padding:10px 0">安装完成后会直接看到，打开插件开关即可</p>
          <img src="@/assets/images/5.jpg" alt="" style="width:70%">
          <p>该方法大部分情况下可以一次成功，个别时候会收到浏览器安全提醒，忽略即可</p>
          
      </div>
      </div>
  </div>
</template>

<script>
import posiTion from '@/components/categoryChild/position'
export default {
    head() {
    return {
      title:'CC插件|分享优质的chrome插件'
    }
    },
    components:{
        posiTion
    },
    created() {
        this.$route.meta.fenlei = '最全的Chrome插件安装方法!'
    }
}
</script>

<style lang="less">
    .jiaocheng{
        padding: 10px 10%;
        background-color: white;
        border-radius: 15px;
        img{
               
                margin: 20px 0px;
                box-shadow: 0 0 15px #777;
                border-radius: 0.5em;
            }
        .flextitle{
            display: flex;
            flex-direction: column;
            align-items: center;
            .jctitle{
                text-align: center;
                font-size: 25px;
                font-weight: 700;
                padding: 13px 0;
            }
            img{
                 width: 100%;
            }
            
        }
    }
</style>