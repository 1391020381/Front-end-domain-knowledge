* [《WebRTC系列》实战 Web 端支持 H265 硬解](https://juejin.cn/post/7215608036394614844)
1. webrtc  + dataChannel + WebCodecs + Canvas
2. webrtc  + dataChannel + mediaSource + video 
    - MSE 处于 updating的时候，不能进行消费，数据直接被丢掉,导致后续数据衔接不上。 既然不能丢，就缓存下来。
    - 随着时间的增长 延迟会积累。 因为丢包后 网络层会重试，重试的时间会累积进延时。
    - 数据衔接不上？ 是否是完整的一帧？ 对渲染的影响


    - mediaSource 在消费 fmp4数据时，需要根据内部序列号进行索引标识，因此即使丢掉整个个切片 还是会播放失败
    - 当出现丢帧时，通知云端 重新进行切片，并且此时前端重新初始化 MSE