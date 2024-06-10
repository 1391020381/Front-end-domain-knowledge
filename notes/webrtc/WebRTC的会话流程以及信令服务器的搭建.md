1. p2p实现的基本思路
    - webrtc的基本核心对象认识 RtcPeerConnection
    - webrtc实现会话的流程 通话前如何建立p2p会话 需要信令转发
    - 信令服务器的搭建  构思功能以及数据储存和扩展
    - 实现js端呼叫和被呼叫方的基础流程  caller callee 两边的基础流程
    - 完成视频
    - 扩展知识  datachannel   消息类型  消息格式  消息大小  等等
2. PeerConnection 
* 建立关联关系和维护关联关系的载体
    - addIceCandidate  保存ICE候选信息 即双方协商信息 持续整个建立通信的过程 直到没有更多候选者信息。
    - addTrack  添加音频 或者 视频轨道 
    - createAnswer  创建应答信令
    - createDataChannel  创建消息通道 建立 WebRTC 通信之后 就可以 p2p直接发送文本消息 无需中转服务器
    - createOffer  创建初始化信令
    - setRemoteDescription  保存远端发送给自己的信令
    - setLocalDescription  保存自己端创建的信令
    - ondatachannel 创建datachannel后 监听回调以及 p2p消息监听
    - ontrack 监听远程媒体轨道及远端音频信息
    - onicecandidate ICE候选者监听
    - SDP 即 WebRTC 会话的信令