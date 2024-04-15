# [什么是WebRTC](https://juejin.cn/post/7266417942182608955)
* WebRTC (Web Real-Time Communications) 是一项实时通讯技术,它允许网络应用或者站点,在不借助中间媒介的情况下,建立浏览器之间点对点(Peer-to-Peer)的连接,实现视频流 音频流或者其他任意数据的传输。
* WebRTC 无需安装任何插件 或者第三方软件,创建点对点 (Peer-to-Peer)的数据分享和电话会议的成为可能。
# 实时通讯和及时通讯的区别
* IM及时通信,就是通过文字聊天 语音消息发送 文件传输等方式通信, 考虑的是可靠性。
* RTC实时通信  音视频通话 电话会议 考虑的是 低延时。

# WebRTC发展史
* 2012年 Google将 WebRTC集成到Chrome浏览器中。
* 兼容性 当前除了 IE之外的浏览器都支持WebRTC

# WebRTC应用场景
1. 点对点通讯: WebRTC支持浏览器之间进行音频通话 例如 语音通话 视频通话等。
2. 电话会议:WebRTC可以支持多人音频会议 例如 腾讯会议 钉钉会议等。
3. 屏幕共享
4. 直播
# WebRTC组成部分
* WebRTC主要由三个部分组成: 浏览器API 音视频引擎和网络I/O
![WebRTC的组成](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5c28a1d068964be99e9ea624ea54a6f4~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

## 浏览器 API
* 用于采集摄像头和麦克风生成媒体流,并处理音视频通信相关的编码 解码 传输过程,可以使用以下API在浏览器中创建实时通信应用程序。
* getUserMedia 获取麦克风和摄像头的许可,使得WebRTC可以拿到本地媒体流
* RTCPeerConnection 建立点对点链接的关键,提供了创建 保持 监控 关闭链接的方法的实现。 像媒体协商 收集候选地址都需要它来完成。
* RTCDataChannel 支持点对点数据传输 可用于传输文件 文本消息等。
# 音视频引擎
* WebRTC 内置了强大的音视频引擎,可以对媒体浏进行编解码 回声消除 降噪 防止视频抖动等处理,使用者 暂不用关心如何实现。主要使用的音视频编解码器有
* OPUS: 一个开源的低延迟音频解码器, WebRTC默认使用
* G711 国际电信联盟 ITU-T 定制出来的一套语音压缩标准,是主流的波形声音编解码器。
* VP8: VP8 VP9 都是Google开源的视频编解码器 现在主要用于WebRTC视频编码
* H264: 视频编码领域的通用标准,提供了高效的视频压缩编码,之前WebRTC最先支持自己家的VP8,后面也支持H264 H265等。

* 还有像回声消除AEC(Acoustic Echo Chancellor)、背景噪音抑制ANS(Automatic Noise Suppression)和Jitter buffer用来防止视频抖动，这些问题在 WebRTC 中也提供了非常成熟、稳定的算法，并且提供图像增加处理，例如美颜，贴图，滤镜处理等。

* 回声消除AEC(Acoustic Echo Chancellor)
* 背景噪音抑制ANS(Automatic Noise Suppression)
* Jitter buffer用来防止视频抖动
* 图像增加处理 例如美颜 贴图 滤镜处理等。

# 网络 I/O

* WebRTC传输层的是UDP协议,因为音视频传输对及时性要求更高。

* RTP/SRTP 传输音视频数据流时,我们并不是直接将音视频数据流交给UDP传输,而是先给音视频数据加一个RTP头,然后再交给UDP进行,但是由于浏览器对安全性要求比较高,增加了加密这块处理,采用SRTP协议。
* RTCP 通过RTCP 可以知道各端的网络质量,这样对方就可以做流控处理。
* P2P(ICE + STUN + TURN)  Webrtc 最核心的技术,利用 ICE STUN TURN 等技术 实现了浏览器之间的直接点对点连接,解决了NAT穿透问题,实现了高质量的网络传输。


* WebRTC 需要一个信令服务做会话管理,但WebRTC规范里没有包含信令协议,需要自行实现。

# WebRtc通信过程

