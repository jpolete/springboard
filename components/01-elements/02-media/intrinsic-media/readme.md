
Defines image, video, or other embedded media size even before the media loads. 

Advantages

- Minimizes page repaints / reflows 
- Maintains aspect ratio on screen resize (especially useful for videos which would otherwise get squished on small viewports). 

Wrap any `img`, `iframe`, `embed`, or `object` in an element with class `intrinsic-media`. If need to apply this to an element other than the ones listed above, add a `intrinsic-media__item` class.

See http://daverupert.com/2015/12/intrinsic-placeholders-with-picture/
