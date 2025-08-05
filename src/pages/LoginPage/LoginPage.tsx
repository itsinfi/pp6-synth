import Button from '../../components/Button/Button';

export default function LoginPage() {
    return (
        <form>
            <input type="email" name="email" id="email" placeholder="Email" />
            <input type="password" name="password" id="password" placeholder="Password" />
            <Button buttonType="Primary">Submit</Button>
        </form>
    );
}
