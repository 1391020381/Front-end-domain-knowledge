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

## 第一步: 音视频采集
* 采集音视频数据是 WebRTC通信的前提,我们可以使用浏览器提供的getUserMedia API进行音视频采集。

```
const constraints = { video: true, audio: true }
const localStream = navigator.mediaDevices.getUserMedia(constraints)

```
* getUserMedia接受参数constraints用于指定 MediaStream中包含哪些类型的媒体轨(音频轨 视频轨)，并对媒体轨做设置(如设置视频的宽高 帧率等)
* 返回一个 promise对象，成功后会获取流媒体对象MediaStream(包含从音视频设备中获取的音视频数据)
* 使用 getUserMedia时,浏览器会询问用户,开启音频和视频权限。 如果用户拒绝或无权限时,则返回error

## 其他相关API
* MediaDeviceInfo
* navigator.mediaDevices.enumerateDevices()
* navigator.mediaDevices.getDisplayMedia()

* webrtc相关的API需要 HTTPS 或者 localhost 环境支持,因为在浏览器上通过http请求下来的js脚本不允许访问音视频设备的,只有通过https请求的脚本才能访问音视频设备。

## 信令交互
### 什么是信令服务器
* 信令可以简单理解为消息,在协调通讯的过程中,为了建立一个webRTC的通讯过程,在通信双方彼此连接 传输媒体数据之前,它们要通过信令服务器交换一些信息, 如加入房间 离开房间及媒体协商等,而这个过程在webRTC里面是没有实现的,需要自己搭建信令服务。
### 使用Node搭建信令服务器
* Socket.io
* Socket.io 已经内置了房间的概念,所以非常适合用于信令服务器的创建
## RTCPeerConnection 对象 媒体协商

* RTCPeerConnection是一个由本地计算机到远端的WebRTC连接,该接口提供 创建 保持 监控 关闭连接的方法实现,可以简单理解为功能强大的socket连接。
* 通过 new RTCPeerConnection 即可创建一个 RTCPeerConnection对象,此对象主要负责与各端建立连接（NAT 穿越） 接受 发送音视频数据,并保障音视频的服务质量
* 端到端的媒体协商也是基于 RTCPeerConnection对象来实现的。

### 什么是媒体协商
* 媒体协商的作用是找到双方共同支持的媒体能力, 如双方各自支持的编解码器 音频的参数采样率 采样大小 声道数 视频的参数分辨率 帧率等。
* 音频/视频的信息都会在 SDP(Session Description Protocal:即使使用文本描述各端的 能力) 中进行描述。
### 媒体协商过程
* 一对一通信中 发起方发送的SDP称为Offer(提议) 接受方的发送的SDP称为 Answer(应答)
* 每端保持两个描述 描述本身的本地描述 LocalDescription 描述呼叫的远端的远端描述 RemoteDescription
![媒体协商](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f737fac26bad4d788d653ffc52c3fda2~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)
### 代码实现媒体协商过程
* createOffer
* createAnswer
* setLocalDescription
* setRemoteDescription
## 端与端建立连接
* 媒体协商结束后,双端统一了传输协议,编解码器等,此时就需要建立连接开始音视频通信了。
* WebRTC既要保持音视频通信的质量 又要保证联通性。
* 当同时存在多个有效连接时,它首先选择传输质量最好的线路,如能内网连通就不用公网, 优先 P2P  如果P2P不通才会选择中继服务器 relay 因为中继方式会增加双端传输的时长。
### 什么是Candidate
* 媒体协商结束后,开始收集 Candidate 
* ICE Candidate (ICE候选者) 表示WebRTC 与 远端通信时使用的协议 IP地址和端口。

```
{
  address: xxx.xxx.xxx.xxx, // 本地IP地址
  port: number, // 本地端口号
  type: 'host/srflx/relay', // 候选者类型
  priority: number, // 优先级
  protocol: 'udp/tcp', // 传输协议
  usernameFragment: string // 访问服务的用户名
  ...
}


```
* WebRTC在进行连接测试后时,通信双端会提供众多候选者,然后按照优先级进行连通性测试,测试成功就会建立连接。

* 候选者 Candidate 类型 即 type 分为三种类型
    - host 本机候选者  优先级最高 host 类型之间的连通性测试 就是 内网之间的连通性测试  P2P
    - srfix  内网主机映射的外网地址和端口    如果host 无法建立连接 则选择srfix连接 即 P2P
    - relay 中继候选者  优先级最低 只有上述两种不存在时 才会走中继服务器的模式 因为会增加传输时间 优先级最低。
### 如何收集 Candidate
* host 类型  就是 本机的ip地址 和端口
* srfix 类型 就是 内网通过 NAT(Net Address Translation，作用是进行内外网的地址转换 位于内网的网关上) 映射后的外网地址。

![NAT](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c9ba6a245796424a82356f6605f11b46~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)
#### STUN 协议
* 全称  Session Traversal Utilities for NAT  是一种网络协议,它允许位于 NAT后的客户端找出自己的公网地址,也就是遵守这个协议就可以拿到自己的公网IP

#### TURN 协议
* 全称 Traversal Using Relays around NAT (使用中继穿透NAT) STUN的中继扩展。 简单的说 TURN 与 STUN的共同点都是 通过修改应用层中私网地址达到 NAT穿透的效果,异同点是TURN是 通过两方通讯的 中间人 方式实现穿透。

* relay 类型 的 Candidate 获取是通过 TURN协议完成,它的连通率是所有候选者中连通率最高的,优先级也是最低的。

#### NAT 打洞/P2P穿越
### ICE

## 显示远端流