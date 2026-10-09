<template>
    <v-container fill-height fluid class="ma-0 pa-0">
        <v-row no-gutters align="center" justify="center">
            <v-col cols="12" md="10" lg="8" align-self="center" class="page-col">
                <v-card light class="page-card">
                    <v-toolbar>
                        <v-btn icon :to="{ name: 'Blog' }" aria-label="Back to all posts"><v-icon>mdi-arrow-left</v-icon></v-btn>
                        <v-toolbar-title>Blog</v-toolbar-title>
                    </v-toolbar>

                    <article v-if="post" class="pa-4 pa-sm-8">
                        <h1 class="text-h4 mb-2">{{ post.title }}</h1>
                        <div class="text-subtitle-2 grey--text text--darken-1 mb-2">
                            {{ formatDate(post.date) }} · {{ post.readingMinutes }} min read
                        </div>
                        <div v-if="post.tags.length" class="mb-4">
                            <v-chip v-for="tag in post.tags" :key="tag" x-small class="mr-1">{{ tag }}</v-chip>
                        </div>
                        <div class="blog-body" v-html="post.html"></div>
                    </article>

                    <v-card-text v-else class="text-center">
                        That post doesn't exist. <router-link :to="{ name: 'Blog' }">Back to all posts</router-link>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { findPost, formatDate } from '../../posts'

export default {
    name: 'BlogPost',
    props: { slug: { type: String, required: true } },
    computed: {
        post() {
            return findPost(this.slug)
        }
    },
    methods: { formatDate }
}
</script>

<style>
.blog-body {
    font-size: 1.05rem;
    line-height: 1.7;
    overflow-wrap: break-word;
}

.blog-body h2,
.blog-body h3 {
    margin: 1.6em 0 0.5em;
    line-height: 1.3;
}

.blog-body p,
.blog-body ul,
.blog-body ol,
.blog-body blockquote,
.blog-body pre,
.blog-body table {
    margin-bottom: 1em;
}

.blog-body img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 1em auto;
}

.blog-body blockquote {
    border-left: 4px solid #1e88e5;
    padding-left: 1em;
    color: #555;
}

.blog-body code {
    background: #f2f2f2;
    padding: 0.1em 0.35em;
    border-radius: 4px;
    font-size: 0.9em;
}

.blog-body pre {
    background: #1e1e1e;
    color: #eee;
    padding: 1em;
    border-radius: 6px;
    overflow-x: auto;
}

.blog-body pre code {
    background: none;
    padding: 0;
    color: inherit;
}

.blog-body table {
    border-collapse: collapse;
    display: block;
    overflow-x: auto;
}

.blog-body th,
.blog-body td {
    border: 1px solid #ddd;
    padding: 6px 12px;
}
</style>
