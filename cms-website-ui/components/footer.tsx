export default function Footer() {
    return (
        <footer className={"flex justify-center text-gray-600 border-t p-5"}>
        &copy; Zhang {new Date().getFullYear()}
    </footer>
    );
}