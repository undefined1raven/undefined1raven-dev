<script>
    let color = '#FFF';
    let style = '';
    let height = 'auto';
    let width = 'auto';
    let id;

    export { color, style, height, width, id };
</script>

<svg id={id ? id : ''} class="deco" width="{width}" height="{height}" style="position: absolute; {style}" viewBox="0 0 17 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="22.7261" height="0.505025" transform="matrix(0.700071 -0.714073 0.700071 0.714073 0 32.7081)" fill="{color}"/>
<rect width="22.6602" height="0.505025" transform="matrix(0.700071 0.714073 -0.700071 0.714073 0.399475 0.670044)" fill="{color}"/>
</svg>

<style>
    rect{
        transition: all linear 0.2s;
    }
</style>
