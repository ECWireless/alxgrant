export default {
    name: 'prints',
    title: 'Prints',
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
            name: 'printsHeading',
            title: 'Prints Heading',
            type: 'string'
        },
        {
            name: 'printsBodyText',
            title: 'Prints Body Text',
            type: 'blockContent'
        },
        {
            name: 'printsImage1',
            title: 'Prints Image 1',
            type: 'image',
            options: {
            hotspot: true
            }
        },
        {
            name: 'printsImage2',
            title: 'Prints Image 2',
            type: 'image',
            options: {
            hotspot: true
            }
        },
        {
            name: 'printsImage3',
            title: 'Prints Image 3',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'printsImage4',
            title: 'Prints Image 4',
            type: 'image',
            options: {
            hotspot: true
            }
        },
        {
            name: 'printsImage5',
            title: 'Prints Image 5',
            type: 'image',
            options: {
            hotspot: true
            }
        },
        {
            name: 'printsImage6',
            title: 'Prints Image 6',
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
  