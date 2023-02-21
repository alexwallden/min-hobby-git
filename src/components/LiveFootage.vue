<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<template>
  <section>
    <h2>Live footage page</h2>
    <p>Såhär kan elbasen låta live</p>
    <div class="videos">
      <video height="400" controls>
        <source
          src="https://rr2---sn-5go7ynl6.c.drive.google.com/videoplayback?expire=1677005644&ei=DNv0Y_6NJYKBpb0P0oqzmAo&ip=90.235.4.235&cp=QVRMWUFfVFZSRVhPOjlMX2FYTlBidXJUM0xRRTlGb3Z6eHVfbmg2M0FOemFuTXU5VDVUS0IyQ1U&id=8c545bf697b09231&itag=22&source=webdrive&requiressl=yes&mh=pr&mm=32&mn=sn-5go7ynl6&ms=su&mv=m&mvi=2&pl=23&ttl=transient&susc=dr&driveid=1pDUTzcezGNANs1mSSxUEZVtUk79k8Kk_&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=9.357&lmt=1676989857353744&mt=1676990957&subapp=DRIVE_WEB_FILE_VIEWER&txp=0016224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRQIhANYil7UcgCHLqQXNPsYz3diD7GUsWVnXRaaQTGGyIgQFAiABL5AujoDmbaulimEe6q2ulhUGc_M77IfW8awiXJ6FhA==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIhAM6VjOy6fEEv0I2FF33_XX6W9BlR_xlTPY29CfPCTEouAiA8_KmvIzTrMrfoDfKdW6Jr8JwAyesq92YHvVtuV6fKHg==&cpn=5pfWTJBh8_rJFkWC&c=WEB_EMBEDDED_PLAYER&cver=1.20230215.01.00"
          type="video/mp4"
        />
        Din browser stödjer inte video
      </video>
      <video height="400" controls>
        <source
          src="https://rr1---sn-5hnednsz.c.drive.google.com/videoplayback?expire=1677008307&ei=c-X0Y8H9Fbq5u7APq96pmAs&ip=90.235.4.235&cp=QVRMWUFfV1NOSFhPOjlMX2RVSlNidXJUM0xUQjVJb3Z6eHVfcWUyNkFOemFuTXg2UDhUS0IyQ1U&id=c39c2e7512cfa786&itag=18&source=webdrive&requiressl=yes&sc=yes&ttl=transient&susc=dr&driveid=1aA8FoSm-eR4fCXYyijKqET5i_QZnYxz3&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=60.139&lmt=1676993107320727&subapp=DRIVE_WEB_FILE_VIEWER&txp=0016224&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRgIhAMlw4gXHPXOpNA2zuzZCMsvf3DwlbrGcfnXTQFip1_gmAiEA9FyntX7L2LLWZ0Y-DZEyOhB_q5U3uJpGCq20F7e5VL8=&cpn=WsvMIxrhJiIWd_Hh&c=WEB_EMBEDDED_PLAYER&cver=1.20230215.01.00&redirect_counter=1&cm2rm=sn-5gos77l&req_id=1220c16ec09ca3ee&cms_redirect=yes&cmsv=e&mh=jZ&mm=34&mn=sn-5hnednsz&ms=ltu&mt=1676993584&mv=m&mvi=1&pl=23&lsparams=mh,mm,mn,ms,mv,mvi,pl,sc&lsig=AG3C_xAwRgIhAPF9OLhUZG3_FNSb4A63yU5LyO0wZs6VuoIQPCkJeuDQAiEA7dhKFqbVT-gVy9nlONTAAl_QvCPLskcDX1AZ58b2wC8%3D"
          type="video/mp4"
        />
      </video>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '../style/variables';
section {
  height: calc(100vh - $header-height);
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  align-self: flex-start;
}

.videos {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>
