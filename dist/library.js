export function createBook(title, author, year) {
    return { title, author, year, isRead: false };
}
export function markAsRead(book) {
    return { ...book, isRead: true };
}
export function getBookInfo(book) {
    const status = book.isRead ? "прочитана" : "не прочитана";
    return `«${book.title}», ${book.author}, ${book.year} — ${status}`;
}
export function countReadBooks(books) {
    return books.filter((book) => book.isRead).length;
}
