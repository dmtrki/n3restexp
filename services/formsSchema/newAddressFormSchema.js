export default {
    id: 'newAddress',
    type: 'group',
    fields: [
        {
            type: 'html',
            content: '<div class="mmmForm__row">'
        },
        {
            component: 'Input',
            type: 'text',
            name: 'city',
            label: 'Город',
            validation: 'required|max:128'
        },
        {
            component: 'Input',
            type: 'text',
            name: 'street',
            label: 'Улица',
            validation: 'required|max:128'
        },
        {
            component: 'Input',
            type: 'text',
            name: 'building',
            label: 'Дом',
            validation: 'required|max:128'
        },
        {
            type: 'html',
            content: '</div>'
        },
        {
            component: 'Textarea',
            type: 'text',
            name: 'message',
            label: 'Сообщение для службы доставки',
            validation: 'max:512'
        },
    ]
}
