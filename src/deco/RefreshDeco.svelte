<script>
    let size = '3vh';
    let color = '#FFF';
    let style = '';
    let rotate = 0;

    const refreshAni = (duration) => {
        let intervalFreq = duration / 360;
        const interval = setInterval(() => {
            if(rotate < 360){
                rotate += 6;
            }else{
                rotate = 0;
                clearInterval(interval);
            }
        }, intervalFreq);   
    }

    export { size, color, style, refreshAni };
</script>

<svg class="deco" width="{size}" height="{size}" style={`position: absolute; transform: rotate(${rotate}deg); ${style}`} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.1236 7.59704C18.3023 7.46455 18.3405 7.21157 18.1996 7.03942C17.1118 5.71022 15.6404 4.74337 13.9814 4.27414C12.193 3.7683 10.2874 3.86928 8.5625 4.5613C6.83757 5.25333 5.39055 6.49739 4.44763 8.09901C3.50472 9.70063 3.11906 11.5695 3.35094 13.4136C3.58282 15.2576 4.41918 16.9729 5.72926 18.2912C7.03935 19.6095 8.74933 20.4566 10.5919 20.7C12.4344 20.9434 14.3057 20.5695 15.9132 19.6366C17.4044 18.7713 18.5905 17.4702 19.3154 15.9131C19.4093 15.7114 19.3097 15.4758 19.1037 15.3917V15.3917C18.8978 15.3075 18.6636 15.4069 18.5687 15.6081C17.9119 17.0005 16.846 18.1639 15.5089 18.9399C14.0554 19.7833 12.3634 20.1215 10.6974 19.9014C9.03138 19.6813 7.48524 18.9153 6.30068 17.7233C5.11612 16.5313 4.3599 14.9804 4.15023 13.3131C3.94057 11.6457 4.28928 9.95587 5.14185 8.50771C5.99442 7.05954 7.3028 5.93468 8.86245 5.30897C10.4221 4.68325 12.1451 4.59194 13.7622 5.04932C15.2498 5.47008 16.5705 6.33335 17.5517 7.51984C17.6934 7.69128 17.9449 7.72953 18.1236 7.59704V7.59704Z" fill="{color}"/>
<rect x="18.3899" y="7.00916" width="0.672628" height="3.69945" rx="0.336314" transform="rotate(100.454 18.3899 7.00916)" fill="{color}"/>
<rect x="16.9482" y="4.20935" width="0.672628" height="3.69945" rx="0.336314" transform="rotate(-16.3712 16.9482 4.20935)" fill="{color}"/>
</svg>
