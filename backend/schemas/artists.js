export default {
    name: 'artists',
    title: 'Artists',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
            source: 'title',
            maxLength: 96
            }
        },
        {
            name: 'artistsHeading',
            title: 'Artists Heading',
            type: 'string'
        },
        {
            name: 'artistsBodyText',
            title: 'Artists Body Text',
            type: 'blockContent'
        },
        {
            name: 'artistsImage1',
            title: 'Artists Image 1',
            type: 'image',
            options: {
            hotspot: true
            }
        },
        {
            name: 'artistsImage2',
            title: 'Artists Image 2',
            type: 'image',
            options: {
            hotspot: true
            }
        },
        {
            name: 'artistsImage3',
            title: 'Artists Image 3',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'artistsImage4',
            title: 'Artists Image 4',
            type: 'image',
            options: {
            hotspot: true
            }
        },
        {
            name: 'artistsImage5',
            title: 'Artists Image 5',
            type: 'image',
            options: {
            hotspot: true
            }
        },
        {
            name: 'artistsImage6',
            title: 'Artists Image 6',
            type: 'image',
            options: {
                hotspot: true
            }
        },
    ],
  
    preview: {
        select: {
            title: 'title',
        },
    }
}
  