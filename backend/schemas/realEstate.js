export default {
    name: 'realEstate',
    title: 'Real Estate',
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
            name: 'realEstateHeading',
            title: 'Real Estate Heading',
            type: 'string'
        },
        {
            name: 'realEstateBodyText',
            title: 'Real Estate Body Text',
            type: 'blockContent'
        },
        {
            name: 'realEstateImage1',
            title: 'Real Estate Image 1',
            type: 'image',
            options: {
            hotspot: true
            }
        },
        {
            name: 'realEstateImage2',
            title: 'Real Estate Image 2',
            type: 'image',
            options: {
            hotspot: true
            }
        },
        {
            name: 'realEstateImage3',
            title: 'Real Estate Image 3',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'realEstateImage4',
            title: 'Real Estate Image 4',
            type: 'image',
            options: {
            hotspot: true
            }
        },
        {
            name: 'realEstateImage5',
            title: 'Real Estate Image 5',
            type: 'image',
            options: {
            hotspot: true
            }
        },
        {
            name: 'realEstateImage6',
            title: 'Real Estate Image 6',
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
  