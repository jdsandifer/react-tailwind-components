const data = [
    {
        name: 'Alvin',
        total: 219094,
        budget: 574000,
        pacing: 485137,
        delta: -88863,
        deltaPercent: -1548,
        oneDayDeltaPercent: -1799,
    },
    {
        code: 'X184SX9S',
        name: 'Harry',
        google: 641924,
        total: 641924,
        budget: 1558000,
        pacing: 1421403,
        delta: -136597,
        deltaPercent: -877,
        oneDayDeltaPercent: -839,
    },
    {
        code: 'X184SX33',
        name: 'Henry',
        bing: 31758,
        total: 31758,
        budget: 78728,
        pacing: 70321,
        delta: -8407,
        deltaPercent: -1068,
        oneDayDeltaPercent: -1343,
    },
]

const formatDollars = (amountInCents) =>
    amountInCents
        ? `$${(amountInCents / 100).toLocaleString('en-US', {
              minimumFractionDigits: 2,
          })}`
        : ''

const formatPercentage = (percentageWithoutDecimal) =>
    percentageWithoutDecimal
        ? `${(percentageWithoutDecimal / 100).toLocaleString('en-US', {
              minimumFractionDigits: 2,
          })}%`
        : ''

const BudgetTable = () => (
    <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Dad Code
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Google
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Bing
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Total
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Budget
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Pacing
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Change
                                </th>
                                <th
                                    scope="col"
                                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    %
                                </th>
                                <th
                                    scope="col"
                                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    % (1 Day)
                                </th>
                                <th
                                    scope="col"
                                    className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Scrub
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {data.map((info) => (
                                <tr>
                                    <td className="px-6 py-6 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">
                                            {info.code}
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="">
                                                <div className="text-base font-medium text-gray-900">
                                                    {info.name}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">
                                            {formatDollars(info.google)}
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">
                                            {formatDollars(info.bing)}
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">
                                            {formatDollars(info.total)}
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">
                                            {formatDollars(info.budget)}
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">
                                            {formatDollars(info.pacing)}
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">
                                            {formatDollars(info.delta)}
                                        </div>
                                    </td>
                                    <td className="px-4 py-6 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                            {formatPercentage(info.deltaPercent)}
                                        </span>
                                    </td>
                                    <td className="px-4 py-6 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                            {formatPercentage(
                                                info.oneDayDeltaPercent,
                                            )}
                                        </span>
                                    </td>
                                    <td className="px-4 py-6 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                                            No scrub
                                        </span>
                                    </td>
                                    <td className="px-6 py-6 whitespace-nowrap text-right text-sm font-medium">
                                        <a
                                            href="/"
                                            className="text-indigo-600 hover:text-indigo-900"
                                        >
                                            Edit
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
)

export default BudgetTable
