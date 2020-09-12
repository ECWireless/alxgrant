export default {
    name: 'home',
    title: 'Home',
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
            name: 'homeHeading',
            title: 'Home Heading',
            type: 'string'
        },
        {
            name: 'homeLink1',
            title: 'Home Link 1',
            type: 'string'
        },
        {
            name: 'homeLink2',
            title: 'Home Link 2',
            type: 'string'
        },
        {
            name: 'homeLink3',
            title: 'Home Link 3',
            type: 'string'
        },
        {
            name: 'homeBodyText',
            title: 'Home Body Text',
            type: 'blockContent'
        },
        {
            name: 'homeImage1',
            title: 'Home Image 1',
            type: 'image',
            options: {
            hotspot: true
            }
        },
        {
            name: 'homeImage2',
            title: 'Home Image 2',
            type: 'image',
            options: {
            hotspot: true
            }
        },
        {
            name: 'homeImage3',
            title: 'Home Image 3',
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
  