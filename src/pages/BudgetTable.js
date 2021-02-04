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
    {
        code: '08fe7138',
        name: 'Shannon',
        google: 49881,
        bing: 64207,
        total: 159763,
        budget: 78728,
        pacing: 484312,
        delta: -3416,
        deltaPercent: -3472,
        oneDayDeltaPercent: -8327,
    },
    {
        name: 'Randolph',
        google: 286354,
        bing: 137511,
        total: 166048,
        budget: 78728,
        pacing: 341405,
        delta: '-3128',
        deltaPercent: '-3194',
        oneDayDeltaPercent: '-7488',
    },
    {
        code: 'eb92d5c5',
        name: 'Daniels',
        google: 193157,
        bing: 14753,
        total: 229636,
        budget: 78728,
        pacing: 129308,
        delta: '-3658',
        deltaPercent: '-2637',
        oneDayDeltaPercent: '-4066',
    },
    {
        code: '601babcc',
        name: 'Dalton',
        google: 177768,
        bing: 10137,
        total: 235325,
        budget: 78728,
        pacing: 233525,
        delta: '-3805',
        deltaPercent: '-2362',
        oneDayDeltaPercent: '-3484',
    },
    {
        code: '601bacdc',
        name: 'Sexton',
        google: 272232,
        bing: 260238,
        total: 141666,
        budget: 78728,
        pacing: 427312,
        delta: '-1665',
        deltaPercent: '-2953',
        oneDayDeltaPercent: '-3498',
    },
    {
        code: 'bc5a1ce3',
        name: 'Morris',
        google: 250213,
        bing: 299232,
        total: 101841,
        budget: 78728,
        pacing: 759301,
        delta: '-2330',
        deltaPercent: '-2790',
        oneDayDeltaPercent: '-9617',
    },
    {
        name: 'Warner',
        google: 113747,
        bing: 132772,
        total: 350247,
        budget: 78728,
        pacing: 220924,
        delta: '-2192',
        deltaPercent: '-2170',
        oneDayDeltaPercent: '-5233',
    },
    {
        code: '601baba4',
        name: 'Diaz',
        google: 173555,
        bing: 249054,
        total: 126014,
        budget: 78728,
        pacing: 341694,
        delta: '-1039',
        deltaPercent: '-3683',
        oneDayDeltaPercent: '-4281',
    },
    {
        code: '601babc6',
        name: 'Dennis',
        google: 204205,
        bing: 245818,
        total: 238935,
        budget: 78728,
        pacing: 388341,
        delta: '-9365',
        deltaPercent: '-2263',
        oneDayDeltaPercent: '-4781',
    },
    {
        code: '601bf49f',
        name: 'Gonzales',
        google: 141838,
        bing: 285513,
        total: 391603,
        budget: 78728,
        pacing: 221380,
        delta: '-8455',
        deltaPercent: '-5734',
        oneDayDeltaPercent: '-5491',
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
