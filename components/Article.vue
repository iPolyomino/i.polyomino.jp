<template>
<article>
    <div class='title'>
        {{title}}
    </div>
    <div class='paragraph'>
        <!-- <p v-for='line in sentence'>
            {{line.paragraph}}
            <ul class='listContent'>
                <li v-for='lineItem in line.linkArray'>
                    <a :href='lineItem.url'>
                            {{lineItem.name}}
                        </a>
                </li>
            </ul>
        </p> -->
    </div>
</article>
</template>


<script>
import Vue from 'vue';

export default {
    props: ['title', 'sentence'],
};
</script>

<style>
.title {
    color: #000;
    font-size: 3rem;
}
@media screen and (min-width: 320px) and (max-width: 899px) {
    .title {
        font-size: 1.5rem;
    }
}
</style>
