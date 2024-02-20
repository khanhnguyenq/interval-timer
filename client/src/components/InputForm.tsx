export function InputForm() {
    return (<form>
        <div>
        <label>Time On:<input className="border-red-100 border-2" type="number" /></label>
        <label>Time Off:<input className="border-red-100 border-2" type="number" /></label>
        <label>Number of Intervals:<input className="border-red-100 border-2" type="number" /></label>
        </div>
    </form>)
}