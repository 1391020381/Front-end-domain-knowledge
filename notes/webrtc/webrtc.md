* [WebRTC这么火🔥，前端靓仔，请收下这篇入门教程](https://juejin.cn/post/7266417942182608955)

# WebRTC组成部分
* WebRTC主要由三个部分组成：浏览器API  音视频引擎和网络IO
* WebRTC API  getUserMedia  RTCPeerConnection RTCDataChannel
* 音视频引擎  音频 G711/OPUS编解码  回音消除 降噪  视频 H264/VP8编解码  图片增强  Jitter Buffer
* 网络I/O  RTP/SRTP/RTCP   P2P(STUN + TURN _+ ICE)
    - RTP (Real time Transport Protocol)/SRTP (Secure Real-time Transport Protocol)  传输音视频数据流时，我们并不直接将音频数据流交给UDP传输,而是先给音视频数据加个RTP头，然后再交给UDP进行,但是由于浏览器对安全性要求比较高,增加了加密这块的处理采用SRTP协议。
    - RTCP (Real-Time Control Protocol) 通过RTCP可以知道各端的网络质量，这样对方就可以做流控处理。
    - P2P(ICE STUN TURN) WebRtc最核心技术  利用 ICE STUN TURN 等技术，实现了浏览器之间的之间点对点连接,解决了NAT穿透问题,实现了高质量的网络传输。