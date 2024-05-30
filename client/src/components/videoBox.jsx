import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const VideoBox = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    function getUrlParams(url) {
      const urlStr = url.split('?')[1];
      const urlSearchParams = new URLSearchParams(urlStr);
      return Object.fromEntries(urlSearchParams.entries());
    }

    const roomID = getUrlParams(window.location.href)['roomID'] || (Math.floor(Math.random() * 10000) + "");
    const userID = Math.floor(Math.random() * 10000) + "";
    const userName = "userName" + userID;
    const appID = parseInt(import.meta.env.VITE_ZEGOCLOUD_APP_ID);
    const serverSecret = import.meta.env.VITE_ZEGOCLOUD_SERVER_SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, userID, userName);

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: rootRef.current,
    //   sharedLinks: [{
    //     name: 'Personal link',
    //     url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomID,
    //   }],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
      turnOnMicrophoneWhenJoining: false,
      turnOnCameraWhenJoining: false,
      showMyCameraToggleButton: true,
      showMyMicrophoneToggleButton: true,
      showAudioVideoSettingsButton: true,
      showScreenSharingButton: true,
      showTextChat: true,
      showUserList: false,
      maxUsers: 2,
      layout: "Auto",
      showLayoutButton: false,
    });
  }, []);

  return (
    <div id="root" ref={rootRef} style={{ width: '100vw', height: '100vh' }}></div>
  );
};

export default VideoBox;