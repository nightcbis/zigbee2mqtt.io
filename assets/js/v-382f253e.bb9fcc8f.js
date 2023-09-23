"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[76987],{166435:(t,e,o)=>{o.r(e),o.d(e,{data:()=>i});const i=JSON.parse('{"key":"v-382f253e","path":"/devices/T30W3Z.html","title":"ORVIBO T30W3Z control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"ORVIBO T30W3Z control via MQTT","description":"Integrate your ORVIBO T30W3Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-05-19T20:48:40.000Z"},"excerpt":"","headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch (top endpoint)","slug":"switch-top-endpoint","link":"#switch-top-endpoint","children":[]},{"level":3,"title":"Switch (center endpoint)","slug":"switch-center-endpoint","link":"#switch-center-endpoint","children":[]},{"level":3,"title":"Switch (bottom endpoint)","slug":"switch-bottom-endpoint","link":"#switch-bottom-endpoint","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1695432199000},"filePathRelative":"devices/T30W3Z.md"}')},547578:(t,e,o)=>{o.r(e),o.d(e,{default:()=>q});var i=o(166252);const d=(0,i._)("h1",{id:"orvibo-t30w3z",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#orvibo-t30w3z","aria-hidden":"true"},"#"),(0,i.Uk)(" ORVIBO T30W3Z")],-1),n=(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th"),(0,i._)("th")])],-1),s=(0,i._)("tr",null,[(0,i._)("td",null,"Model"),(0,i._)("td",null,"T30W3Z")],-1),c=(0,i._)("td",null,"Vendor",-1),a=(0,i._)("tr",null,[(0,i._)("td",null,"Description"),(0,i._)("td",null,"Smart light switch - 3 gang")],-1),l=(0,i._)("tr",null,[(0,i._)("td",null,"Exposes"),(0,i._)("td",null,"switch (state), linkquality")],-1),u=(0,i._)("tr",null,[(0,i._)("td",null,"Picture"),(0,i._)("td",null,[(0,i._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/T30W3Z.jpg",alt:"ORVIBO T30W3Z"})])],-1),h=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),r=(0,i.uE)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-top-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-top-endpoint" aria-hidden="true">#</a> Switch (top endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_top</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_top&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_top&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_top&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_top&quot;: &quot;&quot;}</code>.</p><h3 id="switch-center-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-center-endpoint" aria-hidden="true">#</a> Switch (center endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_center</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_center&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_center&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_center&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_center&quot;: &quot;&quot;}</code>.</p><h3 id="switch-bottom-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-bottom-endpoint" aria-hidden="true">#</a> Switch (bottom endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_bottom</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_bottom&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_bottom&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_bottom&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_bottom&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),p={},q=(0,o(983744).Z)(p,[["render",function(t,e){const o=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.kq)(" !!!! "),(0,i.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,i.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,i.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,i.kq)(" !!!! "),d,(0,i._)("table",null,[n,(0,i._)("tbody",null,[s,(0,i._)("tr",null,[c,(0,i._)("td",null,[(0,i.Wm)(o,{to:"/supported-devices/#v=ORVIBO"},{default:(0,i.w5)((()=>[(0,i.Uk)("ORVIBO")])),_:1})])]),a,l,u])]),(0,i.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,i.kq)(" Notes END: Do not edit below this line "),h,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[(0,i.Uk)("How to use device type specific configuration")])),_:1})])]),r])}]])}}]);