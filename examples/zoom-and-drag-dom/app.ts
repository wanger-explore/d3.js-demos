import { select } from 'd3';
import { zoom as d3Zoom, zoomIdentity, zoomTransform } from 'd3-zoom';

const container = '#container';
const target = '#app';


const $dom: HTMLElement = document.querySelector(target);

const zoom: any = d3Zoom()
  .scaleExtent([0.1, 10])
  // .clickDistance(5)
  .on('zoom', (e) => {
    const { k, x, y } = e.transform;
    $dom.style.transform = `translate(${x}px,${y}px) scale(${k})`;
    $dom.style.transformOrigin = '0 0';
  })

// select(container).call(zoom).call(zoom.transform, zoomIdentity).on('dblclick.zoom', null);
select(container).call(zoom)






