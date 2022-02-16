export default (count: number, countableForms: string[]) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return countableForms[ (count%100>4 && count%100<20)? 2 : cases[(count%10<5)?count%10:5] ];
}
