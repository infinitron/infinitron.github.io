<template>
    <v-container fill-height fluid class="ma-0 pa-0">
        <v-row no-gutters align="center" justify="center">
            <v-col cols="12" md="10" lg="8" align-self="center" class="page-col">
                <v-card light class="page-card">
                    <v-toolbar>
                        <v-toolbar-title>Blog</v-toolbar-title>
                    </v-toolbar>

                    <div v-if="tags.length" class="px-4 pt-4">
                        <v-chip-group v-model="activeTag" active-class="blue darken-1 white--text" column>
                            <v-chip v-for="tag in tags" :key="tag" :value="tag" small outlined>{{ tag }}</v-chip>
                        </v-chip-group>
                    </div>

                    <v-card-text v-if="!posts.length" class="text-center">
                        No posts yet.
                    </v-card-text>

                    <v-list two-line class="py-0">
                        <template v-for="(post, i) in pagePosts">
                            <v-divider v-if="i > 0" :key="'d-' + post.slug" />
                            <v-list-item :key="post.slug" :to="{ name: 'BlogPost', params: { slug: post.slug } }" class="blog-item">
                                <v-list-item-content>
                                    <v-list-item-title class="text-h6">{{ post.title }}</v-list-item-title>
                                    <v-list-item-subtitle>
                                        {{ formatDate(post.date) }} · {{ post.readingMinutes }} min read
                                    </v-list-item-subtitle>
                                    <div v-if="post.summary" class="text-body-2 mt-1">{{ post.summary }}</div>
                                    <div v-if="post.tags.length" class="mt-2">
                                        <v-chip v-for="tag in post.tags" :key="tag" x-small class="mr-1">{{ tag }}</v-chip>
                                    </div>
                                </v-list-item-content>
                            </v-list-item>
                        </template>
                    </v-list>

                    <v-pagination v-if="pageCount > 1" v-model="page" :length="pageCount" class="my-4" />
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { allPosts, allTags, formatDate } from '../../posts'

const PER_PAGE = 6

export default {
    name: 'BlogList',
    data: () => ({
        page: 1,
        activeTag: undefined,
        tags: allTags
    }),
    computed: {
        posts() {
            return this.activeTag ? allPosts.filter((p) => p.tags.includes(this.activeTag)) : allPosts
        },
        pageCount() {
            return Math.ceil(this.posts.length / PER_PAGE)
        },
        pagePosts() {
            return this.posts.slice((this.page - 1) * PER_PAGE, this.page * PER_PAGE)
        }
    },
    watch: {
        activeTag() {
            this.page = 1
        }
    },
    methods: { formatDate }
}
</script>

<style>
.blog-item {
    padding-top: 12px;
    padding-bottom: 12px;
}

.blog-item .v-list-item__title,
.blog-item .v-list-item__subtitle {
    white-space: normal;
}
</style>
