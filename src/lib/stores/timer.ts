import { readable, type Readable } from 'svelte/store';

export default function (options: { interval: number } = { interval: 100 }): Readable<Date> {
	return readable(null, (set) => {
		// the update function sets the latest date
		const update = () => set(new Date());

		// force an update to initialize the store with a non-null value
		update();

		// setup an interval timer to update the store's value repeatedly over time
		const interval = setInterval(update, options.interval || 1000);

		// return unsubscribe callback:
		// it will stop the timer when the store is destroyed
		return () => clearInterval(interval);
	});
}
