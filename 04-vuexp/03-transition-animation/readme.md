https://vuejs.org/v2/guide/transitions.html

two types of animation CSS and JS

- Transition Component for animation.

- CSS animation classes: 
*-enter-from -> *-enter-active -> *enter-to
*-leave-from -> *-leave-active -> *leave-to


- JS animation classes: 
before-enter -> enter -> after-enter
before-leave -> leave -> after-leave

done, param can only be pass in enter and leave hooks.


Vue prefers css animation over JS animation. But we can notify vue to use JS animation if we have no css animation with, :css="false"

We can work with both css and js animation hooks. Css actually works better with animation and we can perform
other operations with js animation hooks alongside. In that case :css="true"

transition-group is for lists of items. It has every hooks and css animation properties except mode(in-out and out-in)