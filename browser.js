let browser = prompt('Please define the browser');
switch (browser){
    case 'Edge':
        alert('You have got the Edge');
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('Okay we support these browser too');
        break;
    default:
        alert('we hope that this page looks ok');
}